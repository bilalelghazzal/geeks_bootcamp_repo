import math
import random


# ============================================
# Exercise 1: Geometry - Circle Class
# ============================================
class Circle:
    """A class representing a circle with geometric computations."""

    def __init__(self, radius=1.0):
        self.radius = radius

    def perimeter(self):
        """Compute and return the perimeter (circumference) of the circle."""
        return 2 * math.pi * self.radius

    def area(self):
        """Compute and return the area of the circle."""
        return math.pi * self.radius ** 2

    def print_definition(self):
        """Print the geometrical definition of a circle."""
        print(
            "A circle is the set of all points in a plane that are "
            "at a given distance (the radius) from a given point (the center)."
        )


# --- Test Circle ---
print("--- Exercise 1: Circle ---")
c1 = Circle()
print(f"Default circle -> Perimeter: {c1.perimeter():.2f}, Area: {c1.area():.2f}")
c1.print_definition()

c2 = Circle(5)
print(f"Circle(r=5)   -> Perimeter: {c2.perimeter():.2f}, Area: {c2.area():.2f}")

print("\n" + "=" * 50 + "\n")


# ============================================
# Exercise 2: Custom List Class
# ============================================
class MyList:
    """A custom list wrapper with sorting, reversing, and random generation."""

    def __init__(self, letters):
        self.letters = list(letters)

    def reversed_list(self):
        """Return a new list that is the reverse of the internal list."""
        return self.letters[::-1]

    def sorted_list(self):
        """Return a new list that is the sorted version of the internal list."""
        return sorted(self.letters)

    def random_list(self):
        """Generate a list of random integers with the same length as the internal list."""
        return [random.randint(1, 100) for _ in range(len(self.letters))]


# --- Test MyList ---
print("--- Exercise 2: MyList ---")
ml = MyList(['d', 'a', 'c', 'b', 'e'])
print(f"Original:  {ml.letters}")
print(f"Reversed:  {ml.reversed_list()}")
print(f"Sorted:    {ml.sorted_list()}")
print(f"Random:    {ml.random_list()}")

print("\n" + "=" * 50 + "\n")


# ============================================
# Exercise 3: Restaurant Menu Manager
# ============================================
class MenuManager:
    """Manages a restaurant menu: add, update, and remove dishes."""

    def __init__(self):
        self.menu = [
            {"name": "Soup", "price": 10, "spice": "B", "gluten": False},
            {"name": "Hamburger", "price": 15, "spice": "A", "gluten": True},
            {"name": "Salad", "price": 18, "spice": "A", "gluten": False},
            {"name": "French Fries", "price": 5, "spice": "C", "gluten": False},
            {"name": "Beef bourguignon", "price": 25, "spice": "B", "gluten": True},
        ]

    def _find_dish_index(self, name):
        """Return the index of a dish by name (case-insensitive), or -1 if not found."""
        for i, dish in enumerate(self.menu):
            if dish["name"].lower() == name.lower():
                return i
        return -1

    def add_item(self, name, price, spice, gluten):
        """Add a new dish to the menu."""
        self.menu.append({
            "name": name,
            "price": price,
            "spice": spice,
            "gluten": gluten,
        })
        print(f"'{name}' has been added to the menu.")

    def update_item(self, name, price, spice, gluten):
        """Update an existing dish. Notify manager if dish not found."""
        index = self._find_dish_index(name)
        if index != -1:
            self.menu[index] = {
                "name": name,
                "price": price,
                "spice": spice,
                "gluten": gluten,
            }
            print(f"'{name}' has been updated.")
        else:
            print(f"⚠️ '{name}' is not on the menu. Cannot update.")

    def remove_item(self, name):
        """Remove a dish from the menu. Print updated menu or notify if not found."""
        index = self._find_dish_index(name)
        if index != -1:
            removed = self.menu.pop(index)
            print(f"'{removed['name']}' has been removed from the menu.")
            print("Updated menu:")
            for dish in self.menu:
                print(f"  {dish}")
        else:
            print(f"⚠️ '{name}' is not on the menu. Cannot remove.")


# --- Test MenuManager ---
print("--- Exercise 3: MenuManager ---")
manager = MenuManager()

print("\nInitial menu:")
for dish in manager.menu:
    print(f"  {dish}")

print("\nAdding 'Pasta Carbonara':")
manager.add_item("Pasta Carbonara", 20, "A", True)

print("\nUpdating 'Soup':")
manager.update_item("Soup", 12, "C", False)

print("\nTrying to update non-existent dish:")
manager.update_item("Sushi", 30, "A", False)

print("\nRemoving 'French Fries':")
manager.remove_item("French Fries")

print("\nTrying to remove non-existent dish:")
manager.remove_item("Tacos")