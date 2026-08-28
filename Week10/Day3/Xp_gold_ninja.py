import random

# ============================================
# Exercise 1 & 2: Birthday Look-up (Advanced)
# ============================================
print("--- Birthday Look-up ---")

birthdays = {
    "Alice": "1990/05/14",
    "Bob": "1985/11/23",
    "Charlie": "1992/03/07",
    "Diana": "1988/09/30",
    "Eve": "1995/12/25"
}

print("🎉 Welcome to the Birthday Look-up! 🎉")
print("You can look up the birthdays of the people in the list!")

# Exercise 2: Print all names before asking
print(f"\nAvailable people: {', '.join(birthdays.keys())}")

user_name = input("\nEnter a person's name: ").strip()

if user_name in birthdays:
    print(f"🎂 {user_name}'s birthday is {birthdays[user_name]}!")
else:
    print(f"Sorry, we don't have the birthday information for {user_name}.")

print("\n" + "=" * 50 + "\n")

# ============================================
# Exercise 3: Sum X+XX+XXX+XXXX
# ============================================
print("--- Exercise 3: Numeric Sequence Sum ---")

def compute_sequence_sum(x):
    """Return X + XX + XXX + XXXX as integers."""
    x_str = str(x)
    total = sum(int(x_str * i) for i in range(1, 5))
    return total

try:
    user_x = int(input("Enter an integer X: "))
    result = compute_sequence_sum(user_x)
    print(f"For X={user_x}: {user_x} + {str(user_x)*2} + {str(user_x)*3} + {str(user_x)*4} = {result}")
except ValueError:
    print("Please enter a valid integer.")

print("\n" + "=" * 50 + "\n")

# ============================================
# Exercise 4: Double Dice
# ============================================
print("--- Exercise 4: Double Dice Simulation ---")

def throw_dice():
    """Simulate rolling a single die (1-6)."""
    return random.randint(1, 6)

def throw_until_doubles():
    """Keep throwing 2 dice until doubles. Return number of throws."""
    throws = 0
    while True:
        throws += 1
        die1 = throw_dice()
        die2 = throw_dice()
        if die1 == die2:
            break
    return throws

def main():
    """Run 100 double-dice trials and report statistics."""
    results = []  # List to store throws-per-trial
    
    for _ in range(100):
        throws_needed = throw_until_doubles()
        results.append(throws_needed)
    
    total_throws = sum(results)
    average_throws = round(total_throws / len(results), 2)
    
    print(f"Total throws to reach 100 doubles: {total_throws}")
    print(f"Average throws to reach doubles: {average_throws}")

main()