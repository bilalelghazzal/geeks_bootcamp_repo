from openai import OpenAI
from typer import prompt 

def get_human_approval(content:str)->bool:
    print("Generated Content \n:",content)
    response=input("Approve this ?(y/n):")
    return response.lower().startswith("y")

    
def intelligence_with_human_feedback():
    client =OpenAI()
    response=client.responses.create(model="gpt-4o", input=prompt)
    draft_response = response.output_text

    if get_human_approval(draft_response):
        print("Aprroved by human")
    print("Answer not approved")

if __name__=="__main__":
    pass

if __name__ == "__main__":
    intelligence_with_human_feedback("Write a short poem about technology")