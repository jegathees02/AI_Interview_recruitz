# from openai import OpenAI
# # client = OpenAI()
# api_key = "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"

# completion = OpenAI(api_key).chat.completions.create(
# model = "gpt-3.5-turbo",
# messages=[
# {"role": "user", "content": "suggest steps to improve my confidence in interview"}
# ]
# )
# print(completion.choices[0].message.content)

from openai import OpenAI

client = OpenAI(
  organization='org-QILajjByMUTQqiyzhhs75DZO',
)

# openai.api_key = "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"

# client = OpenAI()

completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Hello!"}
  ]
)

print(completion.choices[0].message)
