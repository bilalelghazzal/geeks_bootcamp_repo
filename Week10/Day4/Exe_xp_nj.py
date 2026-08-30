

class Phone:
    """A phone that can make calls and send messages with full history tracking."""

    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    # --- Call 

    def call(self, other_phone):
        """Record an outgoing call to another Phone object."""
        record = f"{self.phone_number} called {other_phone.phone_number}"
        self.call_history.append(record)
        print(record)

    def show_call_history(self):
        """Print the entire call history."""
        if not self.call_history:
            print("No calls in history.")
        else:
            print(f"\n📞 Call History for {self.phone_number}:")
            for entry in self.call_history:
                print(f"  • {entry}")

    # --- Message 

    def send_message(self, other_phone, content):
        """Send a message to another Phone object and store it as a dictionary."""
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content,
        }
        self.messages.append(message)
        print(f"📨 Message sent from {self.phone_number} to {other_phone.phone_number}: \"{content}\"")

    def show_outgoing_messages(self):
        """Display all messages sent FROM this phone."""
        outgoing = [m for m in self.messages if m["from"] == self.phone_number]
        if not outgoing:
            print("No outgoing messages.")
        else:
            print(f"\n📤 Outgoing Messages from {self.phone_number}:")
            for msg in outgoing:
                print(f"  To: {msg['to']} | Content: \"{msg['content']}\"")

    def show_incoming_messages(self):
        """Display all messages received BY this phone."""
        incoming = [m for m in self.messages if m["to"] == self.phone_number]
        if not incoming:
            print("No incoming messages.")
        else:
            print(f"\n📥 Incoming Messages to {self.phone_number}:")
            for msg in incoming:
                print(f"  From: {msg['from']} | Content: \"{msg['content']}\"")

    def show_messages_from(self, other_phone):
        """Display all messages received from a specific Phone object."""
        filtered = [
            m for m in self.messages
            if m["from"] == other_phone.phone_number and m["to"] == self.phone_number
        ]
        if not filtered:
            print(f"No messages from {other_phone.phone_number}.")
        else:
            print(f"\n💬 Messages from {other_phone.phone_number} to {self.phone_number}:")
            for msg in filtered:
                print(f"  Content: \"{msg['content']}\"")


print("--- Creating Phones ---")
alice = Phone("+33-6-1111-1111")
bob = Phone("+33-6-2222-2222")
charlie = Phone("+33-6-3333-3333")

print("\n--- Making Calls ---")
alice.call(bob)
alice.call(charlie)
bob.call(alice)
alice.show_call_history()

print("\n--- Sending Messages ---")
alice.send_message(bob, "Hey Bob! Are we still on for lunch?")
alice.send_message(charlie, "Charlie, meeting moved to 3pm.")
bob.send_message(alice, "Yes! See you at noon.")
bob.send_message(alice, "Actually, can we do 12:30?")
charlie.send_message(alice, "Got it, thanks!")

print("\n--- Viewing Messages ---")
alice.show_outgoing_messages()
alice.show_incoming_messages()
alice.show_messages_from(bob)

print("\n--- Edge Cases ---")
new_phone = Phone("+33-6-9999-9999")
new_phone.show_call_history()
new_phone.show_outgoing_messages()
new_phone.show_incoming_messages()
new_phone.show_messages_from(alice)