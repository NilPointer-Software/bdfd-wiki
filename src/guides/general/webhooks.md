# Webhooks
This wiki explains how to create and use webhooks in BDFD.

## Content
[**Functions Used**](#functions-used) > [**$webhookCreate[]**](#webhookcreate) > [**$webhookSend[]**](#webhooksend) > [**$webhookDelete[]**](#webhookDelete) > [**$webhookAvatarURL[]**](#webhookavatarurl)  > [**$webhookUsername[]**](#webhookusername) > [**$webhookTitle[]**](#webhooktitle) > [**$webhookDescription[]**](#webhookdescription) > [**$webhookFooter[]**](#webhookfooter) > [**$webhookContent[]**](#webhookcontent) > [**$webhookColor[]**](#webhookcolor)

## Functions Used
- [`$webhookCreate[]`](../../bdscript/webhookCreate.md)

## Support Functions Used
- [`$var[]`](../../bdscript/var.md)

# $webhookCreate
Creates and returns the URL of the newly created webhook.

```admonish danger
Webhook URLs should be kept private, don't share them!
```

```admonish warning title="Limit"
Only 10 webhooks can be created per channel.
```

## Syntax
```
$webhookCreate[Channel ID;Username;(Avatar URL)]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel in which the webhook will be created.
- `Username` `(Type: String || Flag: Required)`: Name of the webhook that will be displayed in the channel.
- `Avatar URL` `(Type: String || Flag: Vacantable)`: Avatar of the webhook that will be displayed in the channel.

## Example
```
$nomention
$webhookCreate[$channelID;BDFD Webhook 🤖]
```

```admonish question title="What is this?"
How [`$channelID`](../../bdscript/channelID.md) works?
```

~~~admonish tip
You can use [`$var[]`](../../bdscript/var.md) or [other variable functions](../variables.md) to store the Webhook URL.

```$nomention
$var[Webhook;$webhookCreate[$channelID;Secret]]
Created and saved!
```

> How [`$var[]`](../../bdscript/var.md) and [`$channelID`](../../bdscript/channelID.md) works?

~~~

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
$webhookSend[$var[webhook];I'm the best webhook;Title;;It's description!;#000;;;;;;false]
```

```admonish question title="What is this?"
How [`$webhookCreate[]`](#webhookcreate), [`$channelID`](../../bdscript/channelID.md) and [`$var[]`](../../bdscript/var.md) works?
```

# $webhookDelete
Deletes the wehook.

## Syntax
```
$webhookDelete[Webhook URL]
```

### Parameters
- `Webhook URL` `(Type: URL || Flag: Required)`: The URL of the webhook you want to delete.

## Example
```
$nomention
```

# $webhookAvatarURL
Changes the webhook's avatar.

## Syntax
```
$webhookAvatarURL[Webhook URL;Avatar URL]
```

### Parameters

## Example
```
$nomention
```

# $webhookUsername
Changes the webhook's username.

## Syntax
```
$webhookUsername[Webhook URL;Username]
```

### Parameters

## Example
```
$nomention
```

# $webhookTitle
Adds title to the webhook.

## Syntax
```
$webhookTitle[Webhook URL;Text]
```

### Parameters

## Example
```
$nomention
```

# $webhookDescription
Adds description to the webhook.

## Syntax
```
$webhookDescription[Webhook URL;Text]
```

### Parameters

## Example
```
$nomention
```

# $webhookFooter
Adds footer to the webhook.

## Syntax
```
$webhookFooter[Webhook URL;Text]
```

### Parameters

## Example
```
$nomention
```

# $webhookContent
Adds content to the webhook.

## Syntax
```
$webhookContent[Webhook URL;Text]
```

### Parameters

## Example
```
$nomention
```

# $webhookColor
Adds color to the webhook.

## Syntax
```
$webhookContent[Webhook URL;Color]
```

### Parameters

## Example
```
$nomention
```

