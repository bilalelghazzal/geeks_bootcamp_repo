from pydantic import BaseModel, Field
from openai import OpenAI


class SubTask(BaseModel):
    section_type: str = Field(description="Name of the section")
    description: str = Field(description="What this section covers")
    style_guide: str = Field(description="Writing style")
    target_length: int = Field(description="Target word count")


class OrchestratorPlan(BaseModel):
    topic_analysis: str
    target_audience: str
    sections:list[SubTask]

#call the client 
client=OpenAI()


ORCHESTRATOR_PROMPT = """
    Your are orchestrator  , you take a topic and target and break it down into   list of sections with a description, style guide and target length Topic: {topic}
Target length: {target_length}
Style: {style}.
"""
class BlogOrchestrator:

    def get_plan(
        self,
        topic: str,
        target_length: int,
        style: str
    ) -> OrchestratorPlan:

        # get the plan 
        prompt = ORCHESTRATOR_PROMPT.format(
        topic=topic,
        target_length=target_length,
        style=style)

        response =client.chat.completions.parse(
            model="gpt-4o-mini",
            messages=[{"role": "system", "content": prompt}],
            response_format=OrchestratorPlan
        )
        plan = response.output_parsed
        if (plan is None):
            raise ValueError("Failed to parse the orchestrator plan ")
        return plan 



