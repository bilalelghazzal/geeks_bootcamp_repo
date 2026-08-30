# ============================================
# Challenge 1: Multiples List Generator
# ============================================
print("--- Challenge 1: Multiples List ---")

try:
    number = int(input("Enter a number: "))
    length = int(input("Enter the desired list length: "))
    
    if length <= 0:
        print("Length must be a positive integer.")
    else:
        # Generate list of multiples using list comprehension
        multiples = [number * i for i in range(1, length + 1)]
        print(f"Result: {multiples}")
        
except ValueError:
    print("Please enter valid integers for both number and length.")

print("\n" + "=" * 50 + "\n")

# ============================================
# Challenge 2: Remove Consecutive Duplicates
# ============================================
print("--- Challenge 2: Remove Consecutive Duplicates ---")

user_string = input("Enter a string: ")

if not user_string:
    print("Result: (empty string)")
else:
    # Build new string by keeping only characters that differ from previous
    result = [user_string[0]]
    for char in user_string[1:]:
        if char != result[-1]:
            result.append(char)
    
    cleaned_string = ''.join(result)
    print(f"Result: \"{cleaned_string}\"")