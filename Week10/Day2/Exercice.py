# ============================================
# Exercise 1: Hello World
# ============================================
print("Hello world " * 4)

# ============================================
# Exercise 2: Some Math
# ============================================
result = (99 ** 3) * 8
print(f"\nExercise 2 Result: {result}")

# ============================================
# Exercise 3: What's your name?
# ============================================
print("\n--- Exercise 3 ---")
user_name = input("What is your name? ")
my_name = "Qwen"

if user_name.lower() == my_name.lower():
    print("Wow! We have the same name! Great minds think alike! 😎")
else:
    print(f"Nice to meet you, {user_name}! I'm {my_name}. Different names, but we can still be friends! 🤝")

# ============================================
# Exercise 4: Tall enough to ride a roller coaster
# ============================================
print("\n--- Exercise 4 ---")
try:
    height = int(input("What is your height in centimeters? "))
    if height > 145:
        print("You are tall enough to ride the roller coaster! 🎢 Enjoy!")
    else:
        print("Sorry, you need to grow some more to ride. Keep eating your vegetables! 🥦")
except ValueError:
    print("Please enter a valid number for height.")

# ============================================
# Exercise 5: Favorite Numbers
# ============================================
print("\n--- Exercise 5 ---")

# Step 1: Create a set with favorite numbers
my_fav_numbers = {7, 13, 21, 42}
print(f"My favorite numbers: {my_fav_numbers}")

# Step 2: Add two new numbers
my_fav_numbers.add(99)
my_fav_numbers.add(100)
print(f"After adding 99 and 100: {my_fav_numbers}")

# Step 3: Remove the last number
# Note: Sets are unordered, so "last" is ambiguous. 
# We'll remove an arbitrary element using pop()
removed_number = my_fav_numbers.pop()
print(f"Removed number: {removed_number}")
print(f"After removing one number: {my_fav_numbers}")

# Step 4: Create friend's favorite numbers
friend_fav_numbers = {3, 7, 15, 28}
print(f"Friend's favorite numbers: {friend_fav_numbers}")

# Step 5: Concatenate both sets
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(f"Our combined favorite numbers: {our_fav_numbers}")

# ============================================
# Exercise 6: Tuple
# ============================================
print("\n--- Exercise 6 ---")
print("Question: Given a tuple which value is integers, is it possible to add more integers to the tuple?")
print("Answer: No, tuples are immutable in Python. Once created, you cannot add, remove, or modify elements.")
print("However, you can create a new tuple by concatenating existing tuples.")

# Demonstration:
original_tuple = (1, 2, 3)
print(f"Original tuple: {original_tuple}")
new_tuple = original_tuple + (4, 5)
print(f"New tuple after concatenation: {new_tuple}")

# ============================================
# Exercise 7: List
# ============================================
print("\n--- Exercise 7 ---")

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
print(f"Initial basket: {basket}")

# Remove Banana from the list
basket.remove("Banana")
print(f"After removing Banana: {basket}")

# Remove Blueberries from the list
basket.remove("Blueberries")
print(f"After removing Blueberries: {basket}")

# Add Kiwi to the end of the list
basket.append("Kiwi")
print(f"After adding Kiwi: {basket}")

# Add Apples to the beginning of the list
basket.insert(0, "Apples")
print(f"After adding Apples at beginning: {basket}")

# Count how many apples are in the basket
apple_count = basket.count("Apples")
print(f"Number of Apples in basket: {apple_count}")

# Empty the basket
basket.clear()
print(f"After emptying the basket: {basket}")

# Print basket
print(basket)

# ============================================
# Exercise 8: Sandwich Orders
# ============================================
print("\n--- Exercise 8 ---")

sandwich_orders = [
    "Tuna sandwich",
    "Pastrami sandwich",
    "Avocado sandwich",
    "Pastrami sandwich",
    "Egg sandwich",
    "Chicken sandwich",
    "Pastrami sandwich"
]

print(f"Initial orders: {sandwich_orders}")

# Step 1: Remove all occurrences of Pastrami sandwich
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

print(f"After removing Pastrami sandwiches: {sandwich_orders}")

# Step 2-4: Prepare orders and move to finished_sandwiches
finished_sandwiches = []

while sandwich_orders:
    sandwich = sandwich_orders.pop(0)  # Remove from beginning
    finished_sandwiches.append(sandwich)
    print(f"Making: {sandwich}")

# Step 5: Print all finished sandwiches
print("\nFinished sandwiches:")
for sandwich in finished_sandwiches:
    print(f"I made your {sandwich.lower()}.")