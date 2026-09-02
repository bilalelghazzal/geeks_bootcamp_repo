# # the trully ai component 
from openai import OpenAI 

"""intelligent layer """

# def basic_intelligence(prompt:str)-> str :
#     client = OpenAI()
#     response =client.chat.completions.create(
#         model="gpt-4o" ,input=prompt)
#     return response.output_text

# if __name__ == "__main__":
#     prompt=basic_intelligence(prompt="what is big data ")
#     print("\n output : " , prompt)

"""memory layer"""
client = OpenAI()

def ask_without_memory(prompt:str) -> str :
    response =client.responses.create(
        model="gbt-4o-mini" ,
        input=[
            {"role": "user", "content": "Tell me a joke about programming"},
        ],
    ) 
    return response.output_text

def follow_up_with_memory(joke_response:str):
    response=client.response.create(
        model="gbt-4o-mini",
        input=[
            {"role": "user", "content": "Tell me a joke about programming"},
            {"role":"assistant" , "content": joke_response},
            {"role":"user","content":"Can you explain the joke?"}
            ]
    )
    return response.output_text

if __name__=="__main__":
    joke_response=ask_without_memory()
    print(joke_response ,"\n")

    follow_up=follow_up_with_memory(joke_response)
    print(follow_up,"\n")


