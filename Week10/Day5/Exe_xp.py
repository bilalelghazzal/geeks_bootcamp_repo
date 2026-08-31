import random

class Pets:
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat:
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

bengal = Bengal("Bengal Cat", 3)
chartreux = Chartreux("Chartreux Cat", 4)
siamese = Siamese("Siamese Cat", 2)

all_cats = [bengal, chartreux, siamese]
sara_pets = Pets(all_cats)
sara_pets.walk()


class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight:
            return f"{self.name} won the fight"
        elif self.run_speed() * self.weight < other_dog.run_speed() * other_dog.weight:
            return f"{other_dog.name} won the fight"
        else:
            return "It's a tie"

dog1 = Dog("Rex", 5, 30)
dog2 = Dog("Buddy", 3, 20)
dog3 = Dog("Max", 4, 25)

print(dog1.bark())
print(dog1.fight(dog2))
print(dog2.fight(dog3))


class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = ", ".join([self.name] + list(args))
        print(f"{dog_names} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet")

pet_dog = PetDog("Rocky", 4, 25)
pet_dog.train()
pet_dog.play("Rex", "Buddy")
pet_dog.do_a_trick()


class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations! A new child named {kwargs.get('name', 'Unknown')} was born to the {self.last_name} family!")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f"Family Name: {self.last_name}")
        for member in self.members:
            print(member)

family_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

my_family = Family("Smith", family_members)
my_family.born(name="Tommy", age=0, gender="Male", is_child=True)
print(my_family.is_18("Michael"))
print(my_family.is_18("Tommy"))
my_family.family_presentation()


class TheIncredibles(Family):
    def __init__(self, last_name, members):
        super().__init__(last_name, members)

    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['name']}'s power is {member['power']}")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old")
        return

    def incredible_presentation(self):
        print("Here is our powerful family **")
        super().family_presentation()

incredibles_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]

incredibles_family = TheIncredibles("Incredibles", incredibles_members)
incredibles_family.incredible_presentation()

incredibles_family.born(name="Baby Jack", age=0, gender="Male", is_child=True, power="Unknown Power", incredible_name="Unknown")
incredibles_family.incredible_presentation()

try:
    incredibles_family.use_power("Baby Jack")
except Exception as e:
    print(e)
    
incredibles_family.use_power("Michael")