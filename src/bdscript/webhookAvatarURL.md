# $webhookAvatarURL
Changes the webhook's avatar.

## Syntax
```
$webhookAvatarURL[Webhook URL;New avatar URL]
```

### Parameters
- `Webhook URL` `(Type: URL || Flag: Required)`: The URL of the webhook you want to modify.
- `New avatar URL` `(Type: URL || Flag: Required)`: The new avatar image URL for the webhook.

## Example
```
$nomention
$var[webhook;$webhookCreate[$channelID;Test webhook]]
$webhookAvatarURL[$var[webhook];$authorAvatar]
New avatar for webhook!
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
    New avatar for webhook!
```

```admonish question title="What is this?"
How [`$webhookCreate[]`](./webhookCreate.md), [`$channelID`](./channelID.md), [`$var[]`](./var.md) and [`$authorAvatar`](./authorAvatar.md) works?
```

```admonish info title="Read more"
For more information, read the [Webhooks Guide](../guides/general/webhooks.md).
```
