import os
from pathlib import Path
from openai import OpenAI, APIError, APITimeoutError, AuthenticationError
from dotenv import load_dotenv

load_dotenv(Path(__file__).with_name(".env"), override=True)

# IA Layer
def check_api_key() -> None:
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        print("Error: OPENAI_API_KEY environment variable is not set.")
        print("   Please set it with: $env:OPENAI_API_KEY = 'your-api-key-here'")
        exit(1)

def basic_intelligence(prompt: str) -> str:
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )
    return response.choices[0].message.content

# memory layer

def ask_without_memory() -> str:
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
    try:
        response = client.responses.create(
            model="gpt-4o-mini",
            input=[
                {"role": "user", "content": "Tell me a joke about programming"},
            ],
        )
        return response.output_text
    except (APIError, APITimeoutError, AuthenticationError) as e:
        print(f" API error: {e}")
        exit(1)
# with memory 

def follow_up_with_memory(joke_response: str) -> str:
    """Call the model with memory (chain-of-thought)."""
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
    try:
        response = client.responses.create(
            model="gpt-4o-mini",
            input=[
                {"role": "user", "content": "Tell me a joke about programming"},
                {"role": "assistant", "content": joke_response},
                {"role": "user", "content": "Can you explain the joke?"}
            ]
        )
        return response.output_text
    except (APIError, APITimeoutError, AuthenticationError) as e:
        print(f" API error: {e}")
        exit(1)

if __name__ == "__main__":
    check_api_key()

    print("=== Intelligent Layer (GPT-4o) ===")
    big_data_answer = basic_intelligence(prompt="What is big data?")

    print("\n output : ", big_data_answer)
    print("\n=== Memory Layer (GPT-4o-mini) ===")
    joke_response = ask_without_memory()
    print(joke_response, "\n")

    follow_up = follow_up_with_memory(joke_response)
    print(follow_up, "\n")
