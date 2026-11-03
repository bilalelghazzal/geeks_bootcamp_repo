
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
    sections: list[SubTask]


class SectionContent(BaseModel):
    content: str
    key_point: list[str]


client = OpenAI()


ORCHESTRATOR_PROMPT = """
You are an orchestrator. Analyze the topic, identify the target
audience and divide the work into sections with a description,
style guide and target length.

Topic: {topic}
Target length: {target_length}
Style: {style}
"""


WORKER_PROMPT = """
You are a writer. Write the following section and extract
its key points.

Topic: {topic}
Section: {section_type}
Description: {description}
Style: {style_guide}
Target length: {target_length}
"""


class BlogOrchestrator:

    def get_plan(
        self,
        topic: str,
        target_length: int,
        style: str
    ) -> OrchestratorPlan:

        prompt = ORCHESTRATOR_PROMPT.format(
            topic=topic,
            target_length=target_length,
            style=style
        )

        response = client.chat.completions.parse(
            model="gpt-4o-mini",
            messages=[{"role": "system", "content": prompt}],
            response_format=OrchestratorPlan
        )

        plan = response.choices[0].message.parsed

        if plan is None:
            raise ValueError("Failed to parse the orchestrator plan")

        return plan

    def write_section(
        self,
        topic: str,
        section: SubTask
    ) -> SectionContent:

        prompt = WORKER_PROMPT.format(
            topic=topic,
            section_type=section.section_type,
            description=section.description,
            style_guide=section.style_guide,
            target_length=section.target_length
        )

        response = client.chat.completions.parse(
            model="gpt-4o-mini",
            messages=[{"role": "system", "content": prompt}],
            response_format=SectionContent
        )

        content = response.choices[0].message.parsed

        if content is None:
            raise ValueError("Failed to generate section")

        return content
