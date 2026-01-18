# $sendEmbedMessage
Sends an embed message to the provided channel. Not needed fields can be left empty.

## Syntax
```
$sendEmbedMessage[Channel ID;Content;(Title;Title URL;Description;Color hex;Author;Author icon;Footer;Footer icon;Thumbnail;Image;Add timestamp?;Return ID?)]
```

### Parameters 
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The ID of the channel where the message will be sent to.
- `Content` `(Type: String || Flag: Emptiable)`: The text that is shown above the embed.
- `Title` `(Type: String || Flag: Vacantable)`: The text that will be used as the title.
- `Title URL` `(Type: URL || Flag: Vacantable)`: The URL that will be applied to the title.
- `Description` `(Type: String || Flag: Vacantable)`: The description that will be applied to the embed.
- `Color hex` `(Type: Color || Flag: Vacantable)`: The [color hex](../tools/color.md) to set the embed border color as. You can also use color integer number.
```admonish tip title="Color Picker"
You can use our ["Color" tool](../tools/color.md) to select the best color!
```

- `Author` `(Type: String || Flag: Vacantable )`: The text that appears at the author.
- `Author icon` `(Type: URL || Flag: Vacantable)`: The image that appears next to the author. Must be a valid image URL.
- `Footer` `(Type: String || Flag: Vacantable)`: The text to set the footer as.
- `Footer icon` `(Type: URL || Flag: Vacantable)`: The image that appears next to the footer. Must be a valid image URL.
- `Thumbnail` `(Type: URL || Flag: Vacantable)`: The image to set as the thumbnail.
- `Image` `(Type: URL || Flag: Vacantable)`: The image that appears above the footer. Must be a valid image URL.
- `Add timestamp?` `(Type: Bool || Flag: Vacantable)`: Adds a timestamp to the footer (use `yes` or `no`).
- `Return ID?` `(Type: Bool || Flag: Vacantable)`: Outputs the message ID outside the embed (use `yes` or `no`).

## Example
```
$nomention
$sendEmbedMessage[$channelID;;Title;https://discord.com/;description;000000;author;$authorAvatar;footer;$authorAvatar;$authorAvatar;$authorAvatar;no;no]
```
![image](https://user-images.githubusercontent.com/42785890/151873621-10b17532-93ee-421c-8eea-515f40f1a124.png)

