import datetime

def is_leap_year(year):
    """Check if a year is a leap year."""
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

def get_age(birth_date_str):
    """Calculate age from birthdate string (DD/MM/YYYY)."""
    try:
        day, month, year = map(int, birth_date_str.split('/'))
        birth_date = datetime.date(year, month, day)
        today = datetime.date.today()
        
        # Calculate age
        age = today.year - birth_date.year
        
        # Check if birthday has occurred this year
        if (today.month, today.day) < (birth_date.month, birth_date.day):
            age -= 1
            
        return age, year
    except (ValueError, IndexError):
        return None, None

def draw_cake(age_last_digit):
    """Draw a cake with candles based on the last digit of age."""
    # Number of candles equals the last digit of age
    num_candles = age_last_digit
    
    # Create the candle part
    candles = '_' * ((5 - num_candles) // 2) + 'i' * num_candles + '_' * ((5 - num_candles) - (5 - num_candles) // 2)
    if num_candles == 0:
        candles = '_____'
    elif num_candles == 1:
        candles = '__i__'
    elif num_candles == 2:
        candles = '_ii__'
    elif num_candles == 3:
        candles = '_iii_'
    elif num_candles == 4:
        candles = '_iiii'
    elif num_candles >= 5:
        candles = 'iiiii'
    
    print(f"   {candles}   ")
    print("  |:H:a:p:p:y:|")
    print("__|___________|__")
    print("|^^^^^^^^^^^^^^^^^|")
    print("|:B:i:r:t:h:d:a:y:|")
    print("|                 |")
    print("~~~~~~~~~~~~~~~~~~~")

# Main program
print("--- Happy Birthday Cake Generator ---\n")

# Step 1: Ask for birthdate
birthdate_input = input("Enter your birthdate (format DD/MM/YYYY): ")

# Step 2: Calculate age
age, birth_year = get_age(birthdate_input)

if age is None:
    print("Invalid date format. Please use DD/MM/YYYY.")
else:
    print(f"\nYou are {age} years old!")
    
    # Get the last digit of the age
    last_digit = age % 10
    
    print(f"\nHere is your birthday cake with {last_digit} candle(s):\n")
    
    # Draw the main cake
    draw_cake(last_digit)
    
    # Bonus: Check if born on a leap year
    if is_leap_year(birth_year):
        print("\n🎉 Bonus! You were born on a leap year! Here's an extra cake! 🎉\n")
        draw_cake(last_digit)
    else:
        print("\n(You were not born on a leap year, so only one cake for you!)")