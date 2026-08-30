import time
import os


class GameOfLife:
    """Conway's Game of Life with fixed borders."""

    def __init__(self, rows, cols, initial_state=None):
        self.rows = rows
        self.cols = cols
        self.grid = [[0] * cols for _ in range(rows)]
        if initial_state:
            for r, c in initial_state:
                if 0 <= r < rows and 0 <= c < cols:
                    self.grid[r][c] = 1

    def count_neighbors(self, r, c):
        """Count live neighbors within fixed boundaries."""
        count = 0
        for dr in (-1, 0, 1):
            for dc in (-1, 0, 1):
                if dr == 0 and dc == 0:
                    continue
                nr, nc = r + dr, c + dc
                if 0 <= nr < self.rows and 0 <= nc < self.cols:
                    count += self.grid[nr][nc]
        return count

    def next_generation(self):
        """Compute and return the next generation grid."""
        new_grid = [[0] * self.cols for _ in range(self.rows)]
        for r in range(self.rows):
            for c in range(self.cols):
                neighbors = self.count_neighbors(r, c)
                if self.grid[r][c] == 1:
                    # Live cell survives with 2 or 3 neighbors
                    if neighbors in (2, 3):
                        new_grid[r][c] = 1
                else:
                    if neighbors == 3:
                        new_grid[r][c] = 1
        self.grid = new_grid

    def display(self):
        """Print the current grid to the terminal."""
        os.system('cls' if os.name == 'nt' else 'clear')
        for row in self.grid:
            print(''.join('█' if cell else '·' for cell in row))

    def is_alive(self):
        """Check if any live cells remain."""
        return any(cell for row in self.grid for cell in row)

    def run(self, max_generations=100, delay=0.3):
        """Run the simulation, displaying each generation."""
        gen = 0
        while gen < max_generations and self.is_alive():
            self.display()
            print(f"\nGeneration: {gen} | Live cells: {sum(cell for row in self.grid for cell in row)}")
            time.sleep(delay)
            self.next_generation()
            gen += 1

        self.display()
        print(f"\nSimulation ended at generation {gen}.")
        if not self.is_alive():
            print("All cells have died.")


class ExpandableGameOfLife(GameOfLife):
    """Game of Life with dynamically expanding borders (up to a max size)."""

    def __init__(self, initial_rows=20, initial_cols=40, max_size=10000, initial_state=None):
        super().__init__(initial_rows, initial_cols, initial_state)
        self.max_size = max_size

    def _needs_expansion(self):
        """Check if live cells are near any border."""
        margin = 2
        for r in range(self.rows):
            for c in range(self.cols):
                if self.grid[r][c] == 1:
                    if r < margin or r >= self.rows - margin or c < margin or c >= self.cols - margin:
                        return True
        return False

    def _expand(self):
        """Double the grid size (capped at max_size), centering existing content."""
        new_rows = min(self.rows * 2, self.max_size)
        new_cols = min(self.cols * 2, self.max_size)
        if new_rows == self.rows and new_cols == self.cols:
            return  # Already at max

        offset_r = (new_rows - self.rows) // 2
        offset_c = (new_cols - self.cols) // 2

        new_grid = [[0] * new_cols for _ in range(new_rows)]
        for r in range(self.rows):
            for c in range(self.cols):
                new_grid[r + offset_r][c + offset_c] = self.grid[r][c]

        self.grid = new_grid
        self.rows = new_rows
        self.cols = new_cols
        print(f"🔲 Grid expanded to {self.rows}x{self.cols}")

    def next_generation(self):
        """Expand if needed before computing next generation."""
        if self._needs_expansion():
            self._expand()
        super().next_generation()


PATTERNS = {
    "glider": [(0, 1), (1, 2), (2, 0), (2, 1), (2, 2)],
    "blinker": [(0, 0), (0, 1), (0, 2)],
    "pulsar": [
        (2, 4), (2, 5), (2, 6), (2, 10), (2, 11), (2, 12),
        (4, 2), (4, 7), (4, 9), (4, 14),
        (5, 2), (5, 7), (5, 9), (5, 14),
        (6, 2), (6, 7), (6, 9), (6, 14),
        (8, 2), (8, 7), (8, 9), (8, 14),
        (9, 2), (9, 7), (9, 9), (9, 14),
        (10, 4), (10, 5), (10, 6), (10, 10), (10, 11), (10, 12),
        (12, 4), (12, 5), (12, 6), (12, 10), (12, 11), (12, 12),
    ],
    "gosper_glider_gun": [
        (1, 25), (2, 23), (2, 25), (3, 13), (3, 14), (3, 21), (3, 22), (3, 35), (3, 36),
        (4, 12), (4, 16), (4, 21), (4, 22), (4, 35), (4, 36),
        (5, 1), (5, 2), (5, 11), (5, 17), (5, 21), (5, 22),
        (6, 1), (6, 2), (6, 11), (6, 15), (6, 17), (6, 18), (6, 23), (6, 25),
        (7, 11), (7, 17), (7, 25),
        (8, 12), (8, 16),
        (9, 13), (9, 14),
    ]
}


if __name__ == "__main__":
    print("=== Fixed Borders: Blinker ===")
    blinker_game = GameOfLife(rows=10, cols=20, initial_state=PATTERNS["blinker"])
    blinker_game.run(max_generations=10, delay=0.5)

    input("\nPress Enter to continue to Glider demo...")

    print("\n=== Fixed Borders: Glider (dies at edge) ===")
    glider_game = GameOfLife(rows=15, cols=30, initial_state=PATTERNS["glider"])
    glider_game.run(max_generations=30, delay=0.3)

    input("\nPress Enter to continue to Expandable Borders demo...")

    print("\n=== Expandable Borders: Glider (travels forever) ===")
    expandable_game = ExpandableGameOfLife(
        initial_rows=10, initial_cols=20,
        max_size=200,  # Kept small for demo
        initial_state=PATTERNS["glider"]
    )
    expandable_game.run(max_generations=50, delay=0.3)