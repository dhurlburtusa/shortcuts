# GPT Notes

OpenAI's GPT (generative pre-trained transformer) models have been trained to understand natural language and code. GPTs provide text outputs in response to their inputs. The inputs to GPTs are also referred to as "prompts".

To use a GPT model via the OpenAI API, you’ll send a request containing the inputs and your API key, and receive a response containing the model’s output. The latest models, gpt-4 and gpt-3.5-turbo, are accessed through the chat completions API endpoint.

## Chat completions API

Chat models take a list of messages as input and return a model-generated message as output.

The main input is the messages parameter. Messages must be an array of message objects, where each object has a role (either "system", "user", or "assistant") and content. Conversations can be as short as one message or many back and forth turns.

Typically, a conversation is formatted with a system message first, followed by alternating user and assistant messages. The system message helps set the behavior of the assistant.

The user messages provide requests or comments for the assistant to respond to. Assistant messages store previous assistant responses, but can also be written by you to give examples of desired behavior.

Including conversation history is important when user instructions refer to prior messages. Because the models have no memory of past requests, all relevant information must be supplied as part of the conversation history in each request.
