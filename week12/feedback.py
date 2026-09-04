import os
from pathlib import Path
from dotenv import load_dotenv
from openai import OpenAI

# import requests
# r = requests.get("https://api.openai.com")
# print(r.status_code)

load_dotenv(dotenv_path=Path(__file__).resolve().parent / ".env", override=True)


def get_human_approval(content: str) -> bool:
    print("\n--- Generated Content ---\n", content)
    response = input("\nApprove this? (y/n): ")
    return response.startswith("y")


def intelligence_with_human_feedback(prompt: str) -> str:
    api_key = os.getenv("OPENAI_API_KEY")
    client = OpenAI(api_key=api_key)

    response = client.responses.create(model="gpt-4o", input=prompt)
    draft_response = response.output_text

    if get_human_approval(draft_response):
        print("\nStatus: Approved by human")
        return draft_response
    else:
        print("\nStatus: Answer not approved")
        return None


if __name__ == "__main__":
    result = intelligence_with_human_feedback("Write a short poem about technology")
    if result:
        print("\nFinal Result:\n", result)