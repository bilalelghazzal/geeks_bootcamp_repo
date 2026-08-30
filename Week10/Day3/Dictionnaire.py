

word = input("Enter a word: ")

letter_indexes = {}

for index, letter in enumerate(word):
    letter_indexes.setdefault(letter, []).append(index)

print(letter_indexes)