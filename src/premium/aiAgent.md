# $aiAgent
<div class="functionTags">
  <span id="PremiumTag">Premium</span>
</div>

Prompts AI with Discord message context, an optional system prompt, and a list of BDScript functions it can call as tools. The AI may invoke those functions iteratively (up to 10 times) before producing a final response.

## Syntax
```
$aiAgent[Prompt;(System prompt;Functions;Response token limit)]
```

```admonish tip title="AI Quota"
[4 characters in the AI answer](./ai.md) = [1 token](./aiQuota.md)
```

### Parameters
- `Prompt` `(Type: String || Flag: Required)`: The prompt sent to the AI, for example: "What is the user's score?".
- `System prompt` `(Type: String || Flag: Optional)`: Additional system prompt appended after the message context.
- `Functions` `(Type: String || Flag: Optional)`: Comma-separated list of BDScript function names the AI may call as tools, for example: `getVar,setVar,title`.
- `Response token limit` `(Type: Integer || Flag: Optional)`: Limit the response length per iteration. Approximately 4 characters equals 1 token.

### Context provided to AI
The following information from the triggering Discord message is automatically included:

| Field             | Description                              |
|-------------------|------------------------------------------|
| Author            | Username and user ID                     |
| Author nickname   | Server nickname, if set                  |
| Channel           | Channel name                             |
| Server            | Server name                              |
| Timestamp         | Message sent time                        |
| Edited at         | Edit time, if the message was edited     |
| Mentions everyone | Whether `@everyone` was used             |
| Mentions          | Usernames and IDs of mentioned users     |
| Attachments       | Filenames of attached files              |
| Reactions         | Emoji name and reaction count            |

### How it works
The AI can call any of the listed BDScript functions as tools. After each tool call the result is fed back to the AI, which may call another tool or return its final answer. This loop runs for at most **10 iterations**. If the limit is reached, the last assistant message is returned.

```admonish warning title="Security warning"
Be cautious when granting access to powerful or sensitive functions (e.g. `setVar`, `setUserVar`, `ban`). Any user who can trigger the command can craft a prompt that instructs the AI to call those functions on their behalf — a risk known as **prompt injection**. Consider restricting such commands to bot owners or trusted roles.
```

## Example
```
$nomention
$aiAgent[$message;Answer the user's question using their stored score if needed.;listVar,getUserVar]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example What is my score?
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Your current score is 42!
```
\

## Example with embed
```
$nomention
$aiAgent[$message;;listVar,getUserVar,setUserVar,title,description,color]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example Can you send an embed with title "test" and a description showing the value of my coins variable and pink color?
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    The embed has been created with the title "test", a description of your coins value (123), and is colored pink. If you need anything else, let me know!
  embed:
    title: test
    description: "Your coins value: 123"
    color: "#FF69B4"
```
\

```admonish tip
Use [`$aiWithCtx[]`](./aiWithCtx.md) if you don't need the AI to call any BDScript functions as tools.
```

```admonish tip
Use [`$aiQuota`](./aiQuota.md) to check how many tokens you have left.
```