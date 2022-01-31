# $sendEmbedMessage

Sends embed message to provided channel. Not needed fields can be left empty.

## Usage
```
$sendEmbedMessage[channel ID;content;title;title URL;description;color;author;author icon;footer;footer icon;thumbnail;image;add timestamp;return ID]
```

### Breakdown
- `channel ID` - id of the channel where the message will be sent.
- `content` - text to be sent before embed.
- `title` - text that will be used as the title in the embed.
- `title URL` - url that will be applied to the title.
- `description` - description that will be applied to the embed.
- `color` - the [color hex](https://htmlcolorcodes.com/color-picker/) to set the embed border color as.
- `author icon` - the image that appears in the author icon. This must be a valid image URL.
- `footer` - The text to set the footer as.
- `footer icon` - the URL to set the footer icon as. Must be a valid image URL.
- `thumbnail` - the image to set as the thumbnail.
- `image` - the URL of the image that appears. Must be a valid image URL.
- `add timestamp` - add the time to send (use yes or no).
- `return ID` - output the message ID outside the embed (use yes or no).

## Example
```
$nomention
$sendEmbedMessage[$channelID;;Title;https://discord.gg/;description;000000;author;$authorAvatar;footer;$authorAvatar;$authorAvatar;$authorAvatar;no;no]
```
![image](https://user-images.githubusercontent.com/42785890/151873621-10b17532-93ee-421c-8eea-515f40f1a124.png)
