#!/bin/bash

curl https://ai.company.internal/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4",
    "messages": [
      {
        "role": "system",
        "content": "You are a geography expert. Your task is to provide the capital city of any country asked. Respond only with the city name."
      },
      {
        "role": "user",
        "content": "France"
      }
    ]
  }' | jq -r '.choices[0].message.content'