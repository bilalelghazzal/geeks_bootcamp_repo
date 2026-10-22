from pydantic import BaseModel,Field

class subTask(BaseModel):
    section_type:str = Field(description="Name of section")
    description: str = Field(description="What this section covers")
    style_guide: str = Field(description="Writing style")
    target_length: int = Field(description="Target word count")

    

