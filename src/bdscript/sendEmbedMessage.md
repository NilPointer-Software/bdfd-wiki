# $sendEmbedMessage
Sends embed message to provided channel. Not needed fields can be left empty.

## Syntax
```
$sendEmbedMessage[channel ID;content;(title;title URL;description;color;author;author icon;footer;footer icon;thumbnail;image;add timestamp;return ID)]
```

### Parameters 
- `channel ID` `(Type: Snowflake || Flag: Required)`: ID of the channel where the message will be sent.
- `content` `(Type: String || Flag: Emptiable)`: Text that is shown above the embed.
- `title` `(Type: String || Flag: Vacantable)`: Text that will be used as the title in the embed.
- `title URL` `(Type: URL || Flag: Vacantable)`: URL that will be applied to the title.
- `description` `(Type: String || Flag: Vacantable)`: Description that will be applied to the embed.
- `color` `(Type: Color || Flag: Vacantable)`: The [color hex](https://htmlcolorcodes.com/color-picker/) or integer to set the embed border color as.
- `author` `(Type: String || Flag: Vacantable )`: The text that appear at author 
- `author icon` `(Type: URL || Flag: Vacantable)`: The image that appears next to author. This must be a valid image URL.
- `footer` `(Type: String || Flag: Vacantable)`: The text to set the footer as.
- `footer icon` `(Type: URL || Flag: Vacantable)`: The image that appears next to footer. Must be a valid image URL.
- `thumbnail` `(Type: URL || Flag: Vacantable)`: The image to set as the thumbnail.
- `image` `(Type: URL || Flag: Vacantable)`: The URL of the image that appears. Must be a valid image URL.
- `add timestamp` `(Type: Bool || Flag: Vacantable)`: Adds time in footer (use yes or no).
- `return ID` `(Type: Bool || Flag: Vacantable)`: Outputs the message ID outside the embed (use yes or no).

## Example
```
$nomention
$sendEmbedMessage[$channelID;;Title;https://discord.com/;description;000000;author;$authorAvatar;footer;$authorAvatar;$authorAvatar;$authorAvatar;no;no]
```
![image](https://user-images.githubusercontent.com/42785890/151873621-10b17532-93ee-421c-8eea-515f40f1a124.png)
