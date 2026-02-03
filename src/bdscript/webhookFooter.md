# $webhookFooter
Adds footer to the webhook.

## Syntax
```
$webhookFooter[Webhook URL;Text]
```

### Parameters
- `Webhook URL` `(Type: URL || Flag: Required)`: The URL of the webhook you want to use.
- `Text` `(Type: String || Flag: Required)`: The footer text to add to the embed of the webhook.

## Example
```
$nomention
$var[webhook;$webhookCreate[$channelID;Test webhook]]
$webhookFooter[$var[webhook];Footer Text Here]
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
  embed:
    footer:
      text: Footer Text Here
```

```admonish question title="What is this?"
How [`$webhookCreate[]`](./webhookCreate.md), [`$channelID`](./channelID.md) and [`$var[]`](./var.md) works?
```

```admonish info title="Read more"
For more information, read the [Webhooks Guide](../guides/general/webhooks.md).
```
