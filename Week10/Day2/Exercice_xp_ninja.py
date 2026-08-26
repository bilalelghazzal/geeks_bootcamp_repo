# ============================================
# Exercise 1: Outputs - Predictions & Verification
# ============================================
print("=" * 60)
print("EXERCISE 1: OUTPUTS")
print("=" * 60)

print("\n--- Predicted Outputs (verify by running) ---")
print("3 <= 3 < 9          → True   (chained comparison: 3<=3 AND 3<9)")
print("3 == 3 == 3         → True   (chained equality: 3==3 AND 3==3)")
print("bool(0)             → False  (0 is falsy)")
print("bool(5 == '5')      → False  (int != str, so False, bool(False)=False)")
print("bool(4==4)==bool('4'=='4') → True (True == True)")
print("bool(bool(None))    → False  (None→False→False)")

print("\n--- Variable Assignments ---")
x = (1 == True)   # True because True == 1 in Python
y = (1 == False)  # False because 1 != 0
a = True + 4      # True is 1, so 1 + 4 = 5
b = False + 10    # False is 0, so 0 + 10 = 10

print(f"x is {x}")   # x is True
print(f"y is {y}")   # y is False
print(f"a: {a}")     # a: 5
print(f"b: {b}")     # b: 10

print("\n" + "=" * 60)

# ============================================
# Exercise 2: Longest Word Without 'A'
# ============================================
print("\nEXERCISE 2: LONGEST SENTENCE WITHOUT 'A'")
print("=" * 60)

longest_length = 0

while True:
    sentence = input("\nEnter the longest sentence you can WITHOUT using the letter 'A' (or type 'quit' to exit): ")
    
    if sentence.lower() == 'quit':
        print(f"\nGame over! Your best sentence was {longest_length} characters long.")
        break
    
    # Check if the sentence contains 'a' or 'A'
    if 'a' in sentence.lower():
        print("❌ Oops! Your sentence contains the letter 'A'. Try again!")
        continue
    
    current_length = len(sentence)
    
    if current_length > longest_length:
        longest_length = current_length
        print(f"🎉 Congratulations! New record: {current_length} characters!")
        print(f"   \"{sentence}\"")
    elif current_length == longest_length:
        print(f"😐 You tied your record of {current_length} characters. Try to beat it!")
    else:
        print(f"😕 That's only {current_length} characters. Your best is {longest_length}. Keep trying!")

print("\n" + "=" * 60)

# ============================================
# Exercise 3: Working on a Paragraph
# ============================================
print("\nEXERCISE 3: PARAGRAPH ANALYSIS")
print("=" * 60)

paragraph = """Python is a versatile programming language that has gained immense popularity 
over the years. It was created by Guido van Rossum and first released in 1991. Python emphasizes 
code readability and simplicity, which makes it an excellent choice for beginners. The language 
supports multiple programming paradigms including procedural, object-oriented, and functional 
programming. Many companies use Python for web development, data science, artificial intelligence, 
and automation. Its extensive standard library and active community contribute to its widespread 
adoption across industries worldwide."""

print(f"\n📝 PARAGRAPH:\n\"{paragraph}\"\n")

# Basic metrics
char_count = len(paragraph)

# Sentence count: split by '.', '!', '?' and filter empty strings
import re
sentences = [s.strip() for s in re.split(r'[.!?]+', paragraph) if s.strip()]
sentence_count = len(sentences)

# Word count: split by whitespace and filter empty strings
words = paragraph.split()
word_count = len(words)

# Unique words: convert to lowercase and use set
unique_words = set(word.lower().strip('.,!?;:"\'-()[]{}') for word in words)
unique_word_count = len(unique_words)

# Bonus: Non-whitespace characters
non_whitespace_count = len(paragraph.replace(" ", "").replace("\n", "").replace("\t", ""))

# Bonus: Average words per sentence
avg_words_per_sentence = word_count / sentence_count if sentence_count > 0 else 0

# Bonus: Non-unique words (total words minus unique words)
non_unique_word_count = word_count - unique_word_count

# Display results
print("📊 ANALYSIS RESULTS:")
print("-" * 40)
print(f"Total characters:            {char_count}")
print(f"Sentences:                   {sentence_count}")
print(f"Words:                       {word_count}")
print(f"Unique words:                {unique_word_count}")
print("-" * 40)
print(f"✨ Non-whitespace chars:     {non_whitespace_count}")
print(f"✨ Avg words per sentence:   {avg_words_per_sentence:.2f}")
print(f"✨ Non-unique words:         {non_unique_word_count}")
print("-" * 40)