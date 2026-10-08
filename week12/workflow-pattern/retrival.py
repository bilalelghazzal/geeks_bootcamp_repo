import json
import os

from openai import OpenAI
from pydantic import BaseModel, Field

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def search_kb(question :str):
    with open("kb.json","r")as file : 
        return json.load(file)


tools=[
    {
        "type":"function",
        "function": {
            "name":"search_kb",
            "parameters":{
                "type":"object",
                "properties":{
                    "question":{
                        "type":"object"
                    }
                },
                "required":["question"]
            }

        }
    }
    
]

messages = [
    {"role": "system", "content": "you are ai assistant"},
    {"role": "user", "content": "What is the return policy?"},
]

completion =client.chat.completions.create(
    model="gpt-4o",
    messages=messages,
    tools=tools,
)

# step 2 : model decide to call func 