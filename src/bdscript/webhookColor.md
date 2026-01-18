# $webhookColor
Adds color to the webhook.

## Syntax
```
$webhookColor[Webhook URL;Color hex]
```

### Parameters
- `Webhook URL` `(Type: URL || Flag: Required)`: The URL of the webhook you want to use.
- `Color hex` `(Type: Color || Flag: Required)`: The [color hex](../tools/color.md) to set the embed border color as. You can also use color integer number.
```admonish tip title="Color Picker"
You can use our ["Color" tool](../../tools/color.md) to select the best color!
```

## Example
```
$nomention
$var[webhook;$webhookCreate[$channelID;Test webhook]]
$webhookColor[$var[webhook];#673ab7]
$webhookDescriprion[⬅️ Embed border color.] 
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
  verified: false
  content: <none>
  embed:
    description: ⬅️ Embed border color.
    color: "#673ab7"
```

```admonish question title="What is this?"
How [`$webhookCreate[]`](./webhookCreate.md), [`$webhookDescription[]`](./webhookDescription.md), [`$channelID`](./channelID.md), [`$var[]`](./var.md) works?
```

```admonish info title="Read more"
For more information, read the the [Webhooks Guide](../guides/general/webhooks.md).
```
