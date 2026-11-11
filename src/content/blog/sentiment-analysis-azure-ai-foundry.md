---
title: 'Sentiment Analysis with Azure AI Foundry and the OpenAI SDK'
description: 'Build a small Python app that analyzes the sentiment of text using a model deployed in Azure AI Foundry.'
pubDate: 2026-10-31
tags: ['Azure', 'AI', 'Python']
---

In this post I walk through a small Python demo that uses a model deployed in **Azure AI Foundry** to classify text sentiment.

## Prerequisites

| Requirement | Notes |
| --- | --- |
| Azure subscription | With access to Azure AI Foundry |
| Python 3.11+ | `pip install openai` |
| A model deployment | e.g. `gpt-4o-mini` |

## The code

```python
import os
from openai import AzureOpenAI

client = AzureOpenAI(
    azure_endpoint=os.environ["AZURE_OPENAI_ENDPOINT"],
    api_key=os.environ["AZURE_OPENAI_API_KEY"],
    api_version="2024-10-21",
)

def sentiment(text: str) -> str:
    resp = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Reply with Positive, Negative or Neutral."},
            {"role": "user", "content": text},
        ],
    )
    return resp.choices[0].message.content

print(sentiment("I love deploying to Azure!"))
```

## Next steps

Try batching inputs, adding confidence scores, or wiring it into an Azure Function.
