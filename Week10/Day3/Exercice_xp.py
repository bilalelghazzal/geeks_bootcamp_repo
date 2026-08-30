import random

# ============================================
# Exercise 1: Convert Lists into Dictionaries
# ============================================
print("--- Exercise 1: Convert Lists to Dictionary ---")

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result_dict = dict(zip(keys, values))
print(result_dict)

print("\n" + "=" * 50 + "\n")

# ============================================
# Exercise 2: Cinemax #2
# ============================================
print("--- Exercise 2: Cinemax Ticket Pricing ---")

def calculate_ticket_price(age):
    if age < 3:
        return 0
    elif 3 <= age <= 12:
        return 10
    else:
        return 15

# Bonus: Interactive family input
family = {}
print("Enter family members (type 'done' when finished):")
while True:
    name = input("Name: ").strip()
    if name.lower() == 'done':
        break
    try:
        age = int(input(f"Age of {name}: "))
        family[name] = age
    except ValueError:
        print("Please enter a valid age.")

# Calculate costs
total_cost = 0
for name, age in family.items():
    price = calculate_ticket_price(age)
    total_cost += price
    print(f"{name} (age {age}): ${price}")

print(f"\nTotal cost for the family: ${total_cost}")

print("\n" + "=" * 50 + "\n")

# ============================================
# Exercise 3: Zara Brand Dictionary
# ============================================
print("--- Exercise 3: Zara Brand Info ---")

# 1. Create brand dictionary
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

# 2. Change number of stores to 2
brand["number_stores"] = 2

# 3. Print sentence about Zara's clients
clothes_types = ", ".join(brand["type_of_clothes"])
print(f"Zara's clients include: {clothes_types}.")

# 4. Add country_creation key
brand["country_creation"] = "Spain"

# 5. Check and add Desigual if international_competitors exists
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# 6. Delete creation_date
del brand["creation_date"]

# 7. Print last international competitor
print(f"Last international competitor: {brand['international_competitors'][-1]}")

# 8. Print major colors in the US
print(f"Major colors in the US: {brand['major_color']['US']}")

# 9. Print length of dictionary
print(f"Number of key-value pairs: {len(brand)}")

# 10. Print keys
print(f"Keys: {list(brand.keys())}")

# 11. Create more_on_zara dictionary
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

# 12. Merge more_on_zara into brand
brand.update(more_on_zara)

# 13. Print number_stores value
print(f"number_stores after update: {brand['number_stores']}")
print("(The update() method overwrote the existing number_stores value with 10000)")

print("\n" + "=" * 50 + "\n")

# ============================================
# Exercise 4: Describe City Function
# ============================================
print("--- Exercise 4: Describe City ---")

def describe_city(city, country="Iceland"):
    print(f"{city} is in {country}.")

describe_city("Reykjavik")
describe_city("Paris", "France")
describe_city("Tokyo", "Japan")

print("\n" + "=" * 50 + "\n")

# ============================================
# Exercise 5: Random Number Comparison
# ============================================
print("--- Exercise 5: Random Number Match ---")

def compare_random(user_number):
    if not (1 <= user_number <= 100):
        print("Please enter a number between 1 and 100.")
        return
    
    generated = random.randint(1, 100)
    
    if user_number == generated:
        print(f"🎉 Success! Both numbers are {user_number}!")
    else:
        print(f"❌ Fail! Your number: {user_number}, Generated: {generated}")

try:
    user_num = int(input("Enter a number between 1 and 100: "))
    compare_random(user_num)
except ValueError:
    print("Please enter a valid integer.")

print("\n" + "=" * 50 + "\n")

# ============================================
# Exercise 6: Personalized Shirts
# ============================================
print("--- Exercise 6: Make Shirt ---")

def make_shirt(size="large", message="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{message}'.")

# Default large shirt with default message
make_shirt()

# Medium shirt with default message
make_shirt(size="medium")

# Custom size and message
make_shirt(size="small", message="Code is Life")

# Bonus: Keyword arguments
make_shirt(message="Python Rocks!", size="extra large")

print("\n" + "=" * 50 + "\n")

# ============================================
# Exercise 7: Temperature Advice
# ============================================
print("--- Exercise 7: Temperature Advice ---")

def get_random_temp(season=None):
    """Generate random temperature based on season."""
    temp_ranges = {
        "winter": (-10, 16),
        "spring": (0, 23),
        "autumn": (0, 23),
        "fall": (0, 23),
        "summer": (24, 40)
    }
    
    if season and season.lower() in temp_ranges:
        low, high = temp_ranges[season.lower()]
    else:
        low, high = -10, 40
    
    # Bonus: Return float instead of int
    return round(random.uniform(low, high), 1)

def get_season_from_month(month):
    """Determine season from month number."""
    if month in [12, 1, 2]:
        return "winter"
    elif month in [3, 4, 5]:
        return "spring"
    elif month in [6, 7, 8]:
        return "summer"
    elif month in [9, 10, 11]:
        return "autumn"
    return None

def main():
    # Bonus: Ask for month number instead of season name
    try:
        month = int(input("Enter month number (1-12): "))
        if not 1 <= month <= 12:
            print("Invalid month. Using random temperature range.")
            season = None
        else:
            season = get_season_from_month(month)
            print(f"Detected season: {season.capitalize()}")
    except ValueError:
        print("Invalid input. Using random temperature range.")
        season = None
    
    temp = get_random_temp(season)
    print(f"\nThe temperature right now is {temp}°C.")
    
    # Provide advice based on temperature
    if temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today! 🧣")
    elif 0 <= temp < 16:
        print("Quite chilly! Don't forget your coat! 🧥")
    elif 16 <= temp < 24:
        print("Nice weather! A light jacket should be enough. 😊")
    elif 24 <= temp < 32:
        print("Warm day! Perfect for outdoor activities! ☀️")
    else:
        print("Hot! Stay hydrated and seek shade when possible! 💧")

main()

print("\n" + "=" * 50 + "\n")

# ============================================
# Exercise 8: Star Wars Quiz
# ============================================
print("--- Exercise 8: Star Wars Quiz ---")

data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

def run_quiz(questions):
    correct = 0
    incorrect = 0
    wrong_answers = []
    
    print("\n🌟 STAR WARS QUIZ 🌟\n")
    
    for i, item in enumerate(questions, 1):
        user_answer = input(f"Q{i}: {item['question']} ").strip()
        
        if user_answer.lower() == item["answer"].lower():
            correct += 1
            print("✅ Correct!\n")
        else:
            incorrect += 1
            wrong_answers.append({
                "question": item["question"],
                "your_answer": user_answer,
                "correct_answer": item["answer"]
            })
            print("❌ Wrong!\n")
    
    return correct, incorrect, wrong_answers

def show_results(correct, incorrect, wrong_answers):
    total = correct + incorrect
    print("=" * 40)
    print(f"QUIZ RESULTS: {correct}/{total} correct")
    print(f"Correct: {correct} | Incorrect: {incorrect}")
    print("=" * 40)
    
    # Bonus: Display wrong answers
    if wrong_answers:
        print("\nQuestions you got wrong:")
        for item in wrong_answers:
            print(f"  Q: {item['question']}")
            print(f"  Your answer: {item['your_answer']}")
            print(f"  Correct answer: {item['correct_answer']}")
            print()
    
    # If more than 3 wrong, ask to play again
    if incorrect > 3:
        replay = input("You had more than 3 wrong answers. Play again? (yes/no): ").strip().lower()
        if replay == 'yes':
            c, i, w = run_quiz(data)
            show_results(c, i, w)

# Start the quiz
correct_count, incorrect_count, wrong_list = run_quiz(data)
show_results(correct_count, incorrect_count, wrong_list)