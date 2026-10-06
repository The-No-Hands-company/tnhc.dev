import json, re, subprocess, sys, pathlib

SCRIPT = pathlib.Path(__file__).resolve().parents[1] / "scripts/build-markdown-page.py"

def make_repo(tmp_path, text):
    repo = tmp_path / "src"; repo.mkdir()
    (repo / "doc.md").write_text(text)
    for cmd in (["init", "-q", "-b", "main"], ["add", "doc.md"],
                ["-c", "user.name=t", "-c", "user.email=t@t", "commit", "-qm", "x"]):
        subprocess.run(["git", "-C", str(repo), *cmd], check=True)
    sha = subprocess.run(["git", "-C", str(repo), "rev-parse", "HEAD"], capture_output=True, text=True, check=True).stdout.strip()
    return repo, sha

def run(repo, out, *extra):
    return subprocess.run([sys.executable, str(SCRIPT), "--repo", str(repo), "--file", "doc.md",
                           "--out", str(out), "--export", "DOC", "--source", "https://example.test/doc", *extra],
                          capture_output=True, text=True)

def parse(out):
    body = out.read_text()
    m = re.search(r"export const DOC = (\{.*\});\s*$", body, re.S)
    assert m, body
    return json.loads(m.group(1))

def test_renders_committed_markdown_with_commit(tmp_path):
    repo, sha = make_repo(tmp_path, "# Title\n\n| a | b |\n| - | - |\n| 1 | 2 |\n")
    out = tmp_path / "doc.js"
    r = run(repo, out)
    assert r.returncode == 0, r.stderr
    data = parse(out)
    assert data["commit"] == sha
    assert "<h1" in data["html"] and "<table>" in data["html"]
    assert data["source"] == "https://example.test/doc"
    assert out.read_text().startswith("// GENERATED")

def test_uses_committed_text_not_working_tree(tmp_path):
    repo, _ = make_repo(tmp_path, "# Committed\n")
    (repo / "doc.md").write_text("# Uncommitted edit\n")
    out = tmp_path / "doc.js"
    assert run(repo, out).returncode == 0
    assert "Committed" in parse(out)["html"] and "Uncommitted" not in parse(out)["html"]

def test_fails_loudly_when_file_missing(tmp_path):
    repo, _ = make_repo(tmp_path, "# x\n")
    out = tmp_path / "doc.js"
    r = subprocess.run([sys.executable, str(SCRIPT), "--repo", str(repo), "--file", "nope.md",
                        "--out", str(out), "--export", "DOC", "--source", "s"], capture_output=True, text=True)
    assert r.returncode != 0 and not out.exists()

def test_headings_get_ids_for_anchor_links(tmp_path):
    repo, _ = make_repo(tmp_path, "## Ownership and licences\n")
    out = tmp_path / "doc.js"
    assert run(repo, out).returncode == 0
    assert 'id="ownership-and-licences"' in parse(out)["html"]
