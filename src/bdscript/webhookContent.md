# $webhookContent
Adds content to the webhook.

## Syntax
```
$webhookContent[Webhook URL;Text]
```

### Parameters
- `Webhook URL` `(Type: URL || Flag: Required)`: The URL of the webhook you want to use.
- `Text` `(Type: String || Flag: Required)`: The content text to add to the webhook.

## Example
```
$nomention
$var[webhook;$webhookCreate[$channelID;Test webhook]]
$webhookContent[$var[webhook];Hello from my webhook!]
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 674344467746258975
  username: Test webhook
  color: "#fff"
  bot: true
  verified: true
  content: |
    Hello from my webhook!
```

```admonish question title="What is this?"
How [`$webhookCreate[]`](./webhookCreate.md), [`$channelID`](./channelID.md) and [`$var[]`](./var.md) works?
```

```admonish info title="Read more"
For more information, read the [Webhooks Guide](../guides/general/webhooks.md).
```
