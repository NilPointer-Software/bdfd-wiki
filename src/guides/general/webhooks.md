# Webhooks
This wiki explains how to create and use webhooks in BDFD.

```admonish warning
In this wiki we use functions that only work on [**BDScript 2**](./bds2/aboutBDScript2.md). We recommend you to use the same script language to avoid problems with examples.
```

## Content
[**Functions Used**](#functions-used) > [**$webhookCreate[]**](#webhookcreate) > [**$webhookSend[]**](#webhooksend) > [**$webhookDelete[]**](#webhookDelete) > [**$webhookAvatarURL[]**](#webhookavatarurl)  > [**$webhookUsername[]**](#webhookusername) > [**$webhookTitle[]**](#webhooktitle) > [**$webhookDescription[]**](#webhookdescription) > [**$webhookFooter[]**](#webhookfooter) > [**$webhookContent[]**](#webhookcontent) > [**$webhookColor[]**](#webhookcolor) > [**Beautiful Webhook**](#beautiful-webhook)

## Functions Used
- [`$webhookCreate[]`](../../bdscript/webhookCreate.md)
- [`$webhookSend[]`](../../bdscript/webhookSend.md)
- [`$webhookDelete[]`](../../bdscript/webhookDelete.md)
- [`$webhookAvatarURL[]`](../../bdscript/webhookAvatarURL.md)
- [`$webhookUsername[]`](../../bdscript/webhookUsername.md)
- [`$webhookTitle[]`](../../bdscript/webhookTitle.md)
- [`$webhookDescription[]`](../../bdscript/webhookDescription.md)
- [`$webhookFooter[]`](../../bdscript/webhookFooter.md)
- [`$webhookContent[]`](../../bdscript/webhookContent.md)
- [`$webhookColor[]`](../../bdscript/webhookColor.md)

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
    1234abcd567ABCDEFG890H_654679203GDGJEMFNXH.6479304948
```

```admonish question title="What is this?"
How [`$channelID`](../../bdscript/channelID.md) works?
```

~~~admonish tip
You can use [`$var[]`](../../bdscript/var.md) or [other variable functions](../introduction/variables.md) to store the Webhook URL.

```$nomention
$var[Webhook;$webhookCreate[$channelID;Secret]]
Created and saved!
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
- `Color hex` `(Type: Color || Flag: Vacantable)`: The color hex to set the embed border color as. You can also use color integer number.

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
How [`$webhookCreate[]`](#webhookcreate), [`$channelID`](../../bdscript/channelID.md) and [`$var[]`](../../bdscript/var.md) works?
```

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
How [`$webhookCreate[]`](#webhookcreate), [`$channelID`](../../bdscript/channelID.md) and [`$var[]`](../../bdscript/var.md) works?
```

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
How [`$webhookCreate[]`](#webhookcreate), [`$channelID`](../../bdscript/channelID.md), [`$var[]`](../../bdscript/var.md) and [`$authorAvatar`](../../bdscript/authorAvatar.md) works?
```

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
How [`$webhookCreate[]`](#webhookcreate), [`$channelID`](../../bdscript/channelID.md) and [`$var[]`](../../bdscript/var.md) works?
```

# $webhookTitle
Adds title to the webhook.

## Syntax
```
$webhookTitle[Webhook URL;Text]
```

### Parameters
- `Webhook URL` `(Type: URL || Flag: Required)`: The URL of the webhook you want to use.
- `Text` `(Type: String || Flag: Required)`: The title text to add to the embed of the webhook.

## Example
```
$nomention
$var[webhook;$webhookCreate[$channelID;Test webhook]]
$webhookTitle[$var[webhook];My Webhook Title]
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
  content: |
  embed:
    title: My Webhook Title
```

```admonish question title="What is this?"
How [`$webhookCreate[]`](#webhookcreate), [`$channelID`](../../bdscript/channelID.md) and [`$var[]`](../../bdscript/var.md) works?
```

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
How [`$webhookCreate[]`](#webhookcreate), [`$channelID`](../../bdscript/channelID.md) and [`$var[]`](../../bdscript/var.md) works?
```

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
How [`$webhookCreate[]`](#webhookcreate), [`$channelID`](../../bdscript/channelID.md) and [`$var[]`](../../bdscript/var.md) works?
```

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
How [`$webhookCreate[]`](#webhookcreate), [`$channelID`](../../bdscript/channelID.md) and [`$var[]`](../../bdscript/var.md) works?
```

# $webhookColor
Adds color to the webhook.

## Syntax
```
$webhookColor[Webhook URL;Color hex]
```

### Parameters
- `Webhook URL` `(Type: URL || Flag: Required)`: The URL of the webhook you want to use.
- `Color hex` `(Type: Color || Flag: Required)`: The color hex to set the embed border color as. You can also use color integer number.

## Example
```
$nomention
$var[webhook;$webhookCreate[$channelID;Test webhook]]
$webhookColor[$var[webhook];#673ab7]
$webhookDescription[⬅️ Embed border color.] 
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
How [`$webhookCreate[]`](#webhookcreate), [`$webhookDescriprion[]`](#webhookdescriprion), [`$channelID`](../../bdscript/channelID.md), [`$var[]`](../../bdscript/var.md) works?
```

# Beautiful webhook

Here is one example of how to use a webhook.

```
$nomention
$var[webhook;$webhookCreate[$channelID;I'm webhook 😎;$authorAvatar]]
$webhookContent[$var[webhook];👇 Read before chatting]
$webhookTitle[$var[webhook];📚 Rules]
$webhookDescription[$var[webhook];Just be cool!]
$webhookFooter[$var[webhook];Made by BDFD]
$webhookColor[$var[webhook];#673ab7]
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 803569638084313098
  username: I'm webhook 😎
  color: "#fff"
  bot: true
  verified: false
  content: |
    👇 Read before chatting
  embed:
    title: 📚 Rules
    description: Just be cool!
    color: "#673ab7"
    footer:
      text: Made by BDFD
```

```admonish question title="What is this?"
How [`$authorAvatar`](../../bdscript/authorAvatar.md) works?
```
