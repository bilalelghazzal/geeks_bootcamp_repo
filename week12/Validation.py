from openai import OpenAI
from pydantic import BaseModel

class TaskResult(BaseModel):
    task:str
    completed:bool
    priority:int 

def structured_intelligence(prompt:str)-> TaskResult:
    client =OpenAI()
    response=client.responses.parse(
        model="gpt-4o",
        input=[
            {
                "role":"system",
                "content":"Extract task information from user input"
            },
            {
                "role":"user",
                "content":prompt
            }
        ],
        text_format=TaskResult,
    )
    return response.parsed_output

if __name__ == "__main__":
    result = structured_intelligence(
        "I need to complete the project presentation by Friday, it's high priority"
    )
    print("Structured Output:")
    print(result.model_dump_json(indent=2))
    print(f"Extracted task: {result.task}")