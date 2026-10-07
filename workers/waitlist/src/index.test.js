import { test, expect, beforeAll } from "bun:test";
import worker from "./index.js";

// Workers' crypto.subtle has timingSafeEqual; Bun's does not.
beforeAll(() => {
  if (!crypto.subtle.timingSafeEqual) {
    crypto.subtle.timingSafeEqual = (a, b) => {
      const x = new Uint8Array(a), y = new Uint8Array(b);
      return x.length === y.length && x.every((v, i) => v === y[i]);
    };
  }
});

// Minimal in-memory D1 stub: only the statements the worker issues.
function fakeDb(rows = []) {
  const stmt = (sql, args = []) => ({
    bind: (...a) => stmt(sql, a),
    async run() {
      if (sql.startsWith("DELETE FROM waitlist WHERE id")) {
        const before = rows.length;
        const i = rows.findIndex((r) => r.id === args[0]);
        if (i >= 0) rows.splice(i, 1);
        return { meta: { changes: before - rows.length } };
      }
      return { meta: { changes: 0 } };
    },
    async first(col) {
      const row = { count: rows.length };
      return col ? row[col] : row;
    },
    async all() {
      return { results: rows.map((r) => ({ ...r })) };
    },
  });
  return { prepare: (sql) => stmt(sql) };
}

const mkEnv = () => ({
  ADMIN_API_TOKEN: "test-token",
  DB: fakeDb([
    { id: "a", email: "a@x.io", name: null, node: null, created_at: "2026-01-01" },
    { id: "b", email: "b@x.io", name: null, node: null, created_at: "2026-01-02" },
  ]),
});

const call = (env, method, path, token) =>
  worker.fetch(
    new Request(`https://tnhc.dev${path}`, {
      method,
      headers: token ? { authorization: `Bearer ${token}` } : {},
    }),
    env,
  );

const list = async (env) => (await call(env, "GET", "/api/admin/signups", "test-token")).json();

test("invited with admin token deletes the row", async () => {
  const env = mkEnv();
  const res = await call(env, "POST", "/api/admin/signups/a/invited", "test-token");
  expect(res.status).toBe(200);
  expect(await res.json()).toEqual({ deleted: true });
  const after = await list(env);
  expect(after.total).toBe(1);
  expect(after.entries.map((e) => e.id)).toEqual(["b"]);
});

test("missing token is 401 and deletes nothing", async () => {
  const env = mkEnv();
  const res = await call(env, "POST", "/api/admin/signups/a/invited");
  expect(res.status).toBe(401);
  expect((await list(env)).total).toBe(2);
});

test("wrong token is rejected (403, as the admin list) and deletes nothing", async () => {
  const env = mkEnv();
  const res = await call(env, "POST", "/api/admin/signups/a/invited", "nope");
  expect(res.status).toBe(403);
  expect((await list(env)).total).toBe(2);
});

test("unknown id deletes nothing", async () => {
  const env = mkEnv();
  const res = await call(env, "POST", "/api/admin/signups/zzz/invited", "test-token");
  expect(res.status).toBe(200);
  expect(await res.json()).toEqual({ deleted: false });
  expect((await list(env)).total).toBe(2);
});
