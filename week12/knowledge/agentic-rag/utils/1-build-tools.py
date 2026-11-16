import re
from pathlib import Path

NOTES_DIR = (Path(__file__).parent / "notes").resolve()


# Step 1: list_files

print("\n1. Start from the notes directory:")
print(NOTES_DIR)

print("\n2 find mardown files")
paths=sorted(NOTES_DIR.glob("*.md"))
print(paths[:3])

# return path realtive to notes 
print("\n3. return path realtive to notes")
relative_paths=[str(path.relative_to(NOTES_DIR)) for path in paths]
print(relative_paths[:3])


def list_files(pattern:str="*.md")->list[str]:
    """""list markdown files in the notes directory . """
    return sorted([str(path.relative_to(NOTES_DIR)) for path in NOTES_DIR.glob(pattern)])
print ("\n4 list files ")
print(list_files())


# step 2 : grep :search for pattern that we can define through re 

print("compile a case isensitive regex ")
pattern="connection pool"
rx=re.compile(pattern,re.IGNORECASE)

r = rx.search("This strings contains connection pool")
if r:
    print("Found a match!")
r = rx.search("This strings does not contain our regex pattern")
if not r:
    print("No match found!")


print("\n2. Search one file line by line:")
file = NOTES_DIR / "02-billing-runbook.md"
text = file.read_text()
lines = text.splitlines()
one_file_hits = []

for i, line in enumerate(lines, start=1):
    if rx.search(line):
        rel = file.relative_to(NOTES_DIR)
        one_file_hits.append(f"{rel}:{i}: {line.strip()}")

print(one_file_hits)

print("\n3. Search every markdown file:")
all_files = sorted(NOTES_DIR.rglob("*.md"))


def grep(pattern: str, max_results: int = 30) -> list[str]:
    """Search markdown files for matching lines."""
    rx = re.compile(pattern, re.IGNORECASE)
    hits: list[str] = []
    for file in sorted(NOTES_DIR.rglob("*.md")):
        for i, line in enumerate(file.read_text().splitlines(), start=1):
            if rx.search(line):
                rel = file.relative_to(NOTES_DIR)
                hits.append(f"{rel}:{i}: {line.strip()}")
                if len(hits) >= max_results:
                    return hits
    return hits


print("\ngrep('connection pool'):")
print(grep("connection pool"))