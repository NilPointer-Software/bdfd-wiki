# Webhooks
This wiki explains how to create and use webhooks in BDFD.

## Content
[**Functions Used**](#functions-used) > [**$webhookCreate[]**](#webhookcreate) 

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

~~~admonish tip
You can use [`$var[]`](../../bdscript/var.md) or [other variable functions](../variables.md) to store the Webhook URL.

```$nomention
$var[Webhook;$webhookCreate[$channelID;Secret]]
Created and saved!
```

~~~

# $webhookSend
Sends message as the webhook.

## Syntax
```
$webhookSend[Webhook URL;(Content;Title;Title URL;Description;Color;Author;Author icon URL;Footer;Footer icon URL;Thumbnail URL;Image URL;Add timestamp?)]
```

### Parameters

## Example
```
$nomention
$var[webhook;$webhookCreate[$channelID;Test webhook]]
$webhookSend[$var[webhook];I'm the best webhook;Title;;It's description!;#000;;;;;;false]
```

# $webhookDelete
Deletes the wehook.

## Syntax
```
$webhookDelete[Webhook URL]
```

### Parameters

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

