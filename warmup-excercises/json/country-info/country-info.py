from openai import OpenAI
from pydantic import BaseModel

client = OpenAI(
    base_url="https://ai.company.internal/v1",
    api_key="not-needed"
)

class CountryCapital(BaseModel):
    country: str
    capital: str
    population: int
    continent: str

response = client.beta.chat.completions.parse(
    model="gpt-4",
    messages=[
        {"role": "user", "content": "Give me information about France"}
    ],
    response_format=CountryCapital
)

result = response.choices[0].message.parsed
print(f"Country: {result.country}")
print(f"Capital: {result.capital}")
print(f"Population: {result.population}")
print(f"Continent: {result.continent}")