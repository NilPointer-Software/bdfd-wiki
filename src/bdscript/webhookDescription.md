# $webhookDescription
Adds description to the webhook.

## Syntax
```
$webhookDescription[Webhook URL;Text]
```

### Parameters
- `Webhook URL` `(Type: URL || Flag: Required)`: The URL of the webhook you want to use.
- `Text` `(Type: String || Flag: Required)`: The description text to add to the embed of the webhook.

## Example
```
$nomention
$var[webhook;$webhookCreate[$channelID;Test webhook]]
$webhookDescription[$var[webhook];This is a detailed description for my webhook.]
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 887433921657176065
  username: Test webhook
  color: "#fff"
  bot: true
  verified: false
  content: <none>
  embed:
    description: This is a detailed description for my webhook.
```

```admonish question title="What is this?"
How [`$webhookCreate[]`](./webhookCreate.md), [`$channelID`](./channelID.md) and [`$var[]`](./var.md) works?
```

```admonish info title="Read more"
For more information, read the [Webhooks Guide](../guides/general/webhooks.md).
```
