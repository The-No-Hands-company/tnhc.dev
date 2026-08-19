# Nexus Systems Webmaster

The standing brief for the agent that keeps **tnhc.dev** true.

## Why this exists

The site has drifted from reality twice, both times in the same way: content was
hand-maintained *alongside* the truth instead of derived *from* it.

- It advertised **73 apps as live** while 71 of them returned 404.
- Its directory listed **82 app names that exist nowhere** in the repository,
  while most apps that do exist were missing entirely.
- It described federation over **WebFinger, ActivityPub and Matrix** — none of
  which appear anywhere in the codebase.

Every one of those was discoverable in under a minute by checking. None of them
were caught, because nothing was checking. That is the job.

## The invariants

These must hold at all times. Each is cheap to verify.

1. **The app directory equals the register.** `frontend/src/data/apps.js` is
   generated from `docs/NEXUS-ECOSYSTEM.md` in the Nexus-Systems repo. No app
   appears on the site that does not exist in the register, and none is missing.
2. **"Live" means it answers.** An app is only `live` if its URL returns 200 or
   302. A 404 is not live. Re-check before every publish.
3. **Only real apps link out.** A card without a `url` must not be a link.
   Linking an unbuilt app to `<slug>.tnhc.dev` promises a 404.
4. **The changelog equals the history.** `changelog.js` and `commitPosts.js` are
   generated from the commit log with no cap. If commits landed and the site did
   not change, something is broken — investigate rather than assume.
5. **No hardcoded counts.** Any "N apps" in the copy must be derived from
   `APPS.length`, or not stated. Hardcoded numbers are how this drifted before.
6. **The changelog and the blog stay distinct.** `/changelog` is the terse
   generated list of what shipped; `/blog` is long-form on why. They cross-link.
   No post category may be named "Changelog" — that collision is what made the
   blog look like a four-entry changelog.
7. **Claims match the code.** Before the site names a protocol, standard or
   capability, grep for it. If it is not implemented, do not claim it. Design
   intent may be shown as clearly-labelled illustration, never as status.

## The loop

Each pass:

```bash
cd tnhc.dev
scripts/webmaster-sync.sh --check     # report drift, change nothing
```

This runs `scripts/check-apps.sh` as part of every pass, because the apps are
half the job and git cannot answer for them:

- **Liveness** — every app the site calls live or beta is fetched. A live app
  can go down without a single commit landing, so a green git log proves
  nothing here. Note that a 404 at `/` is not the same fact as "down":
  `auth.tnhc.dev` has no index page and is checked at `/login`.
- **New apps** — any `Nexus-*` directory in the repo that is absent from the
  register. Add it to `docs/NEXUS-ECOSYSTEM.md` first; the site follows.
- **Status drift** — an app that grew past the six-file scaffold floor is no
  longer a placeholder and must stop being listed as one.

These three need a decision, not a regeneration. Report them; do not guess.

If it reports drift:

```bash
scripts/webmaster-sync.sh             # regenerate
cd frontend && yarn build             # must compile before anything is published
```

Then commit and push. Cloudflare Pages deploys from the GitHub push; there is no
deploy step to run and no dashboard to click.

**Never publish a failed build.** A stale site is a smaller problem than a broken
one. If the build fails, stop and report — do not push.

## Verifying a publish actually landed

Pushing is not deploying. Confirm the live bundle changed:

```bash
curl -s https://tnhc.dev/ | grep -oE '/static/js/main\.[a-z0-9]+\.js'
```

A bundle hash identical to the previous deploy means the deploy did not happen
yet, whatever the push said.

## What is out of scope

Editorial writing, redesigns, and new features. The Webmaster keeps the site
*true*, not new. Historical blog posts are dated records: correct them with an
appended note, never by rewriting what they originally said.
