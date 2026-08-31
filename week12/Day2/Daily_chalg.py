import math


class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is None and diameter is None:
            raise ValueError("Provide radius or diameter")

        if radius is not None and diameter is not None:
            raise ValueError("Provide only radius or only diameter")

        if radius is not None:
            self.radius = float(radius)
        else:
            self.radius = float(diameter) / 2

    @property
    def diameter(self):
        return self.radius * 2

    def area(self):
        return math.pi * self.radius ** 2

    def __str__(self):
        return f"Circle(radius={self.radius}, diameter={self.diameter})"

    def __repr__(self):
        return self.__str__()

    def __add__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return Circle(radius=self.radius + other.radius)

    def __eq__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return math.isclose(self.radius, other.radius)

    def __lt__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius < other.radius

    def __gt__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius > other.radius

    def __le__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius <= other.radius

    def __ge__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius >= other.radius


def draw_sorted_circles(circles):
    import turtle

    if not circles:
        return

    sorted_circles = sorted(circles)
    max_radius = max(circle.radius for circle in sorted_circles)

    screen = turtle.Screen()
    screen.setworldcoordinates(
        -max_radius - 10,
        -max_radius - 10,
        max_radius + 10,
        max_radius + 10
    )

    t = turtle.Turtle()
    t.speed(0)

    for circle in sorted_circles:
        t.penup()
        t.goto(0, -circle.radius)
        t.pendown()
        t.circle(circle.radius)

    screen.mainloop()


if __name__ == "__main__":
    c1 = Circle(radius=3)
    c2 = Circle(diameter=10)
    c3 = c1 + c2

    print(c1)
    print(c2)
    print(c3)
    print(c3.area())
    print(c1 > c2)
    print(c1 == Circle(radius=3))

    circles = [
        Circle(radius=5),
        Circle(diameter=2),
        Circle(radius=1),
        Circle(diameter=20)
    ]

    print(sorted(circles))