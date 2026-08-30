
print("--- Exercise 1: Cats ---")


class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


def find_oldest_cat(cats):
    """Return the Cat object with the highest age."""
    return max(cats, key=lambda cat: cat.age)



cat1 = Cat("Whiskers", 5)
cat2 = Cat("Mittens", 12)
cat3 = Cat("Shadow", 8)

cats = [cat1, cat2, cat3]

oldest = find_oldest_cat(cats)
print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")

print("\n" + "=" * 50 + "\n")



print("--- Exercise 2: Dogs ---")


class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")



davids_dog = Dog("Rex", 50)
print(f"David's dog: {davids_dog.name}, {davids_dog.height}cm")
davids_dog.bark()
davids_dog.jump()

print()

sarahs_dog = Dog("Teacup", 20)
print(f"Sarah's dog: {sarahs_dog.name}, {sarahs_dog.height}cm")
sarahs_dog.bark()
sarahs_dog.jump()

print()

# Compare sizes
if davids_dog.height > sarahs_dog.height:
    print(f"The bigger dog is {davids_dog.name}.")
elif sarahs_dog.height > davids_dog.height:
    print(f"The bigger dog is {sarahs_dog.name}.")
else:
    print("Both dogs are the same size.")

print("\n" + "=" * 50 + "\n")


# ============================================

print("--- Exercise 3: Song Producer ---")


class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)


stairway = Song([
    "There’s a lady who's sure",
    "all that glitters is gold",
    "and she’s buying a stairway to heaven"
])

stairway.sing_me_a_song()

print("\n" + "=" * 50 + "\n")



print("--- Exercise 4: Zoo Manager ---")


class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        """Add animal only if it isn't already in the list."""
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"'{new_animal}' has been added to {self.name}.")
        else:
            print(f"'{new_animal}' is already in the zoo.")

    def get_animals(self):
        """Print all animals currently in the zoo."""
        print(f"\n🐾 Animals in {self.name}:")
        if not self.animals:
            print("  (empty)")
        else:
            for animal in self.animals:
                print(f"  • {animal}")

    def sell_animal(self, animal_sold):
        """Remove an animal from the zoo if it exists."""
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"'{animal_sold}' has been sold/removed.")
        else:
            print(f"'{animal_sold}' is not in the zoo.")

    def sort_animals(self):
        """Sort animals alphabetically and group by first letter.
        Returns a dict where single-animal groups use a string value,
        and multi-animal groups use a list."""
        sorted_animals = sorted(self.animals)
        groups = {}

        for animal in sorted_animals:
            first_letter = animal[0].upper()
            if first_letter not in groups:
                groups[first_letter] = []
            groups[first_letter].append(animal)

       
        result = {}
        for letter in sorted(groups.keys()):
            if len(groups[letter]) == 1:
                result[letter] = groups[letter][0]
            else:
                result[letter] = groups[letter]

        return result

    def get_groups(self):
        """Print animals grouped by their first letter."""
        groups = self.sort_animals()
        print(f"\n📋 Animal Groups in {self.name}:")
        for letter, animals in groups.items():
            print(f"  {letter}: {animals}")


# --- Test Zoo ---
new_york_zoo = Zoo("New York Zoo")

animals_to_add = ["Giraffe", "Ape", "Baboon", "Bear", "Cat", "Cougar", "Eel", "Emu", "Giraffe"]
for animal in animals_to_add:
    new_york_zoo.add_animal(animal)

new_york_zoo.get_animals()


new_york_zoo.sell_animal("Eel")
new_york_zoo.sell_animal("Penguin") 

new_york_zoo.get_animals()
new_york_zoo.get_groups()
##