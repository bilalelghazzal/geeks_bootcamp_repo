import random

# ============================================
# Exercise 1: What is the Season?
# ============================================
print("--- Exercise 1: What is the Season? ---")
try:
    month = int(input("Enter a month (1-12): "))
    
    if month < 1 or month > 12:
        print("Invalid month. Please enter a number between 1 and 12.")
    elif month in [3, 4, 5]:
        print("Season: Spring ")
    elif month in [6, 7, 8]:
        print("Season: Summer ")
    elif month in [9, 10, 11]:
        print("Season: Autumn ")
    else:  # December (12), January (1), February (2)
        print("Season: Winter ")
except ValueError:
    print("Please enter a valid integer for the month.")

print("\n" + "="*50 + "\n")

# ============================================
# Exercise 2: For Loop
# ============================================
print("--- Exercise 2: For Loop ---")

# Part 1: Print all numbers from 1 to 20
print("All numbers from 1 to 20:")
for i in range(1, 21):
    print(i, end=" ")
print()  # New line




print("\nNumbers with even index (position 1, 3, 5... i.e., indices 0, 2, 4...):")
numbers = list(range(1, 21))
for index in range(0, len(numbers), 2):  # Step by 2 starting from 0
    print(numbers[index], end=" ")
print()

print("\n" + "="*50 + "\n")

# ============================================
# Exercise 3: While Loop
# ============================================
print("--- Exercise 3: While Loop ---")
my_name = "Qwen"  # Change this to your actual name

while True:
    user_name = input("Enter your name (or type 'Qwen' to stop): ")
    if user_name == my_name:
        print(f"Hey! That's my name too! Goodbye, {user_name}!")
        break
    else:
        print(f"Hello, {user_name}. Keep trying!")

print("\n" + "="*50 + "\n")

# ============================================
# Exercise 4: Check the index
# ============================================
print("--- Exercise 4: Check the index ---")
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_name = input("Enter a name to search for: ")

if user_name in names:
    index = names.index(user_name)  # Returns first occurrence
    print(f"The first occurrence of '{user_name}' is at index {index}.")
else:
    print(f"'{user_name}' is not in the list.")

print("\n" + "="*50 + "\n")

# ============================================
# Exercise 5: Greatest Number
# ============================================
print("--- Exercise 5: Greatest Number ---")

try:
    num1 = float(input("Input the 1st number: "))
    num2 = float(input("Input the 2nd number: "))
    num3 = float(input("Input the 3rd number: "))
    
    greatest = max(num1, num2, num3)
    print(f"The greatest number is: {greatest}")
except ValueError:
    print("Please enter valid numbers.")

print("\n" + "="*50 + "\n")

# ============================================
# Exercise 6: Random number
# ============================================
print("--- Exercise 6: Random number ---")

games_won = 0
games_lost = 0

while True:
    try:
        user_guess = input("Guess a number from 1 to 9 (or type 'quit' to exit): ")
        
        if user_guess.lower() == 'quit':
            break
        
        user_guess = int(user_guess)
        
        if user_guess < 1 or user_guess > 9:
            print("Please enter a number between 1 and 9.")
            continue
        
        # Generate random number
        random_number = random.randint(1, 9)
        
        if user_guess == random_number:
            print("Winner! 🎉")
            games_won += 1
        else:
            print(f"Better luck next time. The correct number was {random_number}.")
            games_lost += 1
            
    except ValueError:
        print("Please enter a valid number or 'quit'.")

# Display final scores
print("\n" + "="*50)
print("GAME OVER!")
print(f"Total games won: {games_won}")
print(f"Total games lost: {games_lost}")
print(f"Total games played: {games_won + games_lost}")
if games_won + games_lost > 0:
    win_rate = (games_won / (games_won + games_lost)) * 100
    print(f"Win rate: {win_rate:.2f}%")