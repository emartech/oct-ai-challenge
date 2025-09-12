from openai import OpenAI

client = OpenAI(
    base_url="https://ai.company.internal/v1",
    api_key="not-needed"
)

response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {
            "role": "system",
            "content": "You are a geography expert. Your task is to provide the capital city of any country asked. Respond only with the city name."
        },
        {
            "role": "user",
            "content": "France"
        }
    ]
)

result = response.choices[0].message.content
print(result)