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

system_prompt="you are ai assisstant "

messages = [
    {"role": "system", "content": system_prompt},
    {"role": "user", "content": "What is the return policy?"},
]

completion =client.chat.completions.create(
    model="gpt-4o",
    messages=messages,
    tools=tools,
)


# step 2 : model decide to call function 

completion.model_dump()
 # step 3 :  execut func 


def call_function(name, args):
    if name == "search_kb":
        return search_kb(**args)


for tool_call in completion.choices[0].message.tool_calls:
    name = tool_call.function.name
    args = json.loads(tool_call.function.arguments)
    messages.append(completion.choices[0].message)

    result = call_function(name, args)
    messages.append(
        {"role": "tool", "tool_call_id": tool_call.id, "content": json.dumps(result)}
    )

# --------------------------------------------------------------
# Step 4: Supply result and call model again
# --------------------------------------------------------------


class KBResponse(BaseModel):
    answer: str = Field(description="The answer to the user's question.")
    source: int = Field(description="The record id of the answer.")


completion_2 = client.beta.chat.completions.parse(
    model="gpt-4o",
    messages=messages,
    tools=tools,
    response_format=KBResponse,
)

# --------------------------------------------------------------
# Step 5: Check model response
# --------------------------------------------------------------

final_response = completion_2.choices[0].message.parsed
final_response.answer
final_response.source

# --------------------------------------------------------------
# Question that doesn't trigger the tool
# --------------------------------------------------------------

messages = [
    {"role": "system", "content": system_prompt},
    {"role": "user", "content": "What is the weather in Tokyo?"},
]

completion_3 = client.beta.chat.completions.parse(
    model="gpt-4o",
    messages=messages,
    tools=tools,
)

completion_3.choices[0].message.content

