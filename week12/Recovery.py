from typing import Optional
from openai import OpenAI
from pydantic import BaseModel


class UserInfo(BaseModel):
    name: str
    email: str
    age: Optional[int] = None


def resilient_intelligence(prompt: str) -> str:
    client = OpenAI()

    # Get structured output
    response = client.responses.parse(
        model="gpt-4o",
        input=[
            {
                "role": "system",
                "content": "Extract user information from the text."
            },
            {
                "role": "user",
                "content": prompt
            },
        ],
        text_format=UserInfo,
        temperature=0.0,
    )

    # Convert parsed object to dictionary
    user_data = response.output_parsed.model_dump()

    try:
        age = user_data["age"]
        if age is None:
            raise ValueError("Age is None")

        age_info= f"User is {age} years old"
        return age_info

    except (KeyError, TypeError, ValueError):

        print("❌ Age not available, using fallback info...")

        # Return name and email instead
        return f"User {user_data['name']} has email {user_data['email']}"


if __name__ == "__main__":

    result = resilient_intelligence(
        "My name is Alice Johnson and my email is alice@example.com"
    )

    print("Recovery Output:")
    print(result)