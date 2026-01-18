# $webhookSend
Sends message as the webhook.

## Syntax
```
$webhookSend[Webhook URL;(Content;Title;Title URL;Description;Color hex;Author;Author icon URL;Footer;Footer icon URL;Thumbnail URL;Image URL;Add timestamp?)]
```

### Parameters
- `Webhook URL` `(Type: URL || Flag: Required)`: The URL of the webhook you want to use.
- `Content` `(Type: String || Flag: Vacantable)`: The text that is shown above the embed.
- `Title` `(Type: String || Flag: Vacantable)`: The text that will be used as the title.
- `Title URL` `(Type: URL || Flag: Vacantable)`: The URL that will be applied to the title.
- `Description` `(Type: String || Flag: Vacantable)`: The description that will be applied to the embed.
- `Color hex` `(Type: Color || Flag: Vacantable)`: The [color hex](../tools/color.md) to set the embed border color as. You can also use color integer number.
```admonish tip title="Color Picker"
You can use our ["Color" tool](../../tools/color.md) to select the best color!
```

- `Author` `(Type: String || Flag: Vacantable )`: The text that appears at the author.
- `Author icon` `(Type: URL || Flag: Vacantable)`: The image that appears next to the author.
- `Footer` `(Type: String || Flag: Vacantable)`: The text to set the footer as.
- `Footer icon` `(Type: URL || Flag: Vacantable)`: The image that appears next to the footer.
- `Thumbnail` `(Type: URL || Flag: Vacantable)`: The image to set as the thumbnail.
- `Image` `(Type: URL || Flag: Vacantable)`: The image that appears above the footer.
- `Add timestamp?` `(Type: Bool || Flag: Vacantable)`: Adds a timestamp to the footer.

## Example
```
$nomention
$var[webhook;$webhookCreate[$channelID;Test webhook]]
$webhookSend[$var[webhook];I'm the best webhook;Title;;It's a description!;#673ab7;;;;;;false]
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: Test webhook
  color: "#fff"
  bot: true
  verified: true
  content: |
    I'm the best webhook
  embed:
    title: Title
    description: It's a description!
    color: "#673ab7"
    footer:
      text: Footer Text Here
```

```admonish question title="What is this?"
How [`$webhookCreate[]`](./webhookCreate.md), [`$channelID`](./channelID.md) and [`$var[]`](./var.md) works?
```

```admonish info title="Read more"
For more information, read the the [Webhooks Guide](../guides/general/webhooks.md).
```
