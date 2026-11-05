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
regex=re.compile(pattern,re.IGNORECASE)

