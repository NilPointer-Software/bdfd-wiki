# $webhookUsername
Changes the webhook's username.

## Syntax
```
$webhookUsername[Webhook URL;New username]
```

### Parameters
- `Webhook URL` `(Type: URL || Flag: Required)`: The URL of the webhook you want to modify.
- `New username` `(Type: String || Flag: Required)`: The new username for the webhook.

## Example
```
$nomention
$var[webhook;$webhookCreate[$channelID;Test webhook]]
$webhookUsername[$var[webhook];BDFD Support]
New username for webhook!
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    New username for webhook!
```

```admonish question title="What is this?"
How [`$webhookCreate[]`](./webhookCreate.md), [`$channelID`](./channelID.md) and [`$var[]`](./var.md) works?
```

```admonish info title="Read more"
For more information, read the [Webhooks Guide](../guides/general/webhooks.md).
```
