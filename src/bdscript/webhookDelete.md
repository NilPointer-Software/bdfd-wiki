# $webhookDelete
Deletes the webhook.

## Syntax
```
$webhookDelete[Webhook URL]
```

### Parameters
- `Webhook URL` `(Type: URL || Flag: Required)`: The URL of the webhook you want to delete.

## Example
```
$nomention
$var[webhook;$webhookCreate[$channelID;Test webhook]]
$webhookDelete[$var[webhook]]
Deleted!
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
    Deleted!
```

```admonish question title="What is this?"
How [`$webhookCreate[]`](./webhookCreate.md), [`$channelID`](./channelID.md) and [`$var[]`](./var.md) works?
```

```admonish info title="Read more"
For more information, read the the [Webhooks Guide](../guides/general/webhooks.md).
```
