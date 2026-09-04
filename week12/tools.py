#
import json 
import requests  
from openai import OpenAI 

def get_weather(latitude,longitude):
    response=requests.get(f"https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&current=temperature_2m,wind_speed_10m"
)
    data=response.json()
    return data["current"]["temperature_2m"]

def call_function(name,args):
    if name=="get_weather":
        return get_weather(**args)
    raise ValueError(f"unknown function {name}")

def intelligence_with_tools(prompt:str) -> str:
    client =OpenAI()
    tools=[
         {
            "type": "function",
            "name": "get_weather",
            "description": "Get current temperature for provided coordinates in celsius.",
            "parameters": {
                "type": "object",
                "properties": {
                    "latitude": {"type": "number"},
                    "longitude": {"type": "number"},
                },
                "required": ["latitude", "longitude"],
                "additionalProperties": False,
            },
            "strict": True,
        }
    ] 
    input_messages=[{
        "role":"user",
        "content":prompt
    }]

    # Step 1: Call model with tools
    response = client.responses.create(
        model="gpt-4o",
        input=input_messages,
        tools=tools,
    )

    #step 2 : handle function calls : 
    for tools_call in response.output:
        if tools_call.type=="function_call":
            #step 3 : execute function 
            name=tools_call.name
            args=json.loads(tools_call.arguments)
            result=call_function(name,args)
            # step 4 append func call result to message
            input_messages.append({
                input_messages.append(tools_call),
                input_messages.append({
                    "type":"function_call_output",
                    "call_id":tools_call.call_id,
                    "output": str(result),
                })
            })
            #stp 5 : get final response with function results 
            final_response=client.responses.create(
                model="gpt-4o",
                input=input_messages,
                tools=tools,
            )
            return final_response.output_text
if __name__ == "__main__":
    result = intelligence_with_tools(prompt="What's the weather like in Paris today?")
    print("Tool Calling Output:")
    print(result)