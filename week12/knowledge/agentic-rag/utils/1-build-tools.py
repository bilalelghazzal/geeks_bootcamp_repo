import re
from pathlib import Path

NOTES_DIR = (Path(__file__).parent / "notes").resolve()


# Step 1: list_files

print("\n1. Start from the notes directory:")
print(NOTES_DIR)