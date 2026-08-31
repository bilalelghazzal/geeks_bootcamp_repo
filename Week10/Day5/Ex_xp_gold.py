class BankAccount:
    def __init__(self, username, password, balance=0):
        self.username = username
        self.password = password
        self.balance = balance
        self.authenticated = False

    def authenticate(self, username, password):
        if username == self.username and password == self.password:
            self.authenticated = True
        else:
            self.authenticated = False

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("User is not authenticated")
        if not isinstance(amount, int) or amount <= 0:
            raise Exception("Deposit amount must be a positive integer")
        self.balance += amount

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("User is not authenticated")
        if not isinstance(amount, int) or amount <= 0:
            raise Exception("Withdrawal amount must be a positive integer")
        self.balance -= amount


class MinimumBalanceAccount(BankAccount):
    def __init__(self, username, password, balance=0, minimum_balance=0):
        super().__init__(username, password, balance)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("User is not authenticated")
        if not isinstance(amount, int) or amount <= 0:
            raise Exception("Withdrawal amount must be a positive integer")
        if self.balance - amount < self.minimum_balance:
            raise Exception(f"Withdrawal denied: balance would fall below minimum of {self.minimum_balance}")
        self.balance -= amount


class ATM:
    def __init__(self, account_list, try_limit):
        valid_accounts = []
        for acc in account_list:
            if isinstance(acc, BankAccount):
                valid_accounts.append(acc)
        self.account_list = valid_accounts

        try:
            try_limit = int(try_limit)
            if try_limit <= 0:
                raise ValueError
            self.try_limit = try_limit
        except (ValueError, TypeError):
            print("Invalid try_limit provided. Defaulting to 2.")
            self.try_limit = 2

        self.current_tries = 0
        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("\n=== ATM Main Menu ===")
            print("1. Log in")
            print("2. Exit")
            choice = input("Select an option: ").strip()

            if choice == "1":
                username = input("Username: ").strip()
                password = input("Password: ").strip()
                self.log_in(username, password)
            elif choice == "2":
                print("Goodbye!")
                break
            else:
                print("Invalid option. Please select 1 or 2.")

    def log_in(self, username, password):
        while self.current_tries < self.try_limit:
            for account in self.account_list:
                account.authenticate(username, password)
                if account.authenticated:
                    print(f"Welcome, {account.username}!")
                    self.show_account_menu(account)
                    account.authenticated = False
                    return

            self.current_tries += 1
            remaining = self.try_limit - self.current_tries

            if remaining > 0:
                print(f"Invalid credentials. {remaining} tries remaining.")
                username = input("Username: ").strip()
                password = input("Password: ").strip()
            else:
                print("Maximum login attempts reached. Shutting down.")
                exit()

    def show_account_menu(self, account):
        while True:
            print(f"\n=== Account Menu ({account.username}) ===")
            print(f"Current Balance: {account.balance}")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Exit")
            choice = input("Select an option: ").strip()

            if choice == "1":
                try:
                    amount = int(input("Enter deposit amount: "))
                    account.deposit(amount)
                    print(f"Deposited {amount}. New balance: {account.balance}")
                except Exception as e:
                    print(f"Error: {e}")

            elif choice == "2":
                try:
                    amount = int(input("Enter withdrawal amount: "))
                    account.withdraw(amount)
                    print(f"Withdrew {amount}. New balance: {account.balance}")
                except Exception as e:
                    print(f"Error: {e}")

            elif choice == "3":
                print("Logged out.")
                break
            else:
                print("Invalid option. Please select 1, 2, or 3.")


acc1 = BankAccount("alice", "pass123", 500)
acc2 = MinimumBalanceAccount("bob", "secret456", 1000, minimum_balance=200)
acc3 = BankAccount("charlie", "qwerty", 300)

atm = ATM([acc1, acc2, acc3], 3)