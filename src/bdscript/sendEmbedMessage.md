# $sendEmbedMessage
Sends embed message to provided channel.

## Usage
```
$sendEmbedMessage[channelID;content;title;titleURL;description;color;author;authorIcon;footer;footerIcon;thumbnail;image;addTimestamp (yes/no);returnMessageID (yes/no)]
```


### Breakdown
- `channelID` - The channel to send this message in. Must be a valid [channel ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID).
- `content` - The non-embedded content of this message.
- `title` - The title of this embed.
- `titleURL` - The title's hyperlink. The `title` field is required if this field is used. Must be a valid link.
- `description` - The description of this embed.
- `color` - The color of this embed, must be a valid [color hex](https://htmlcolorcodes.com/color-picker).
- `author` - The author text of this embed.
- `authorIcon` - The author icon of this embed. The `author` field is required if this field is used. Must be a valid image link.
- `footer` - The footer text of this embed.
- `footerIcon` - The footer icon of this embed. The `footer` field is required if this field is used. Must be a valid image link.
- `thumbnail` - The thumbnail image of this embed. Must be a valid image link.
- `image` - The image of this embed. Must be a valid image link.
- `addTimestamp` - Whether to add a timestamp to the embed. `yes` means a timestamp will be added to the embed, `no` means it won't.
- `returnMessageID` - Whether to return the message ID of the message in a new message. 

### Maneuverment of Fields
Besides `channelID`, `addTimestamp`, and `returnMessageID`, all fields are optional--leave the field empty to not include it.

Although the fields are optional, it doesn't mean that you can exclude them. You must leave the fields you don't want empty.\
**Correct:**
```
$sendEmbedMessage[$channelID;Hello World;Title text;;This is the description;;;;;;;;no;no]
```

**Incorrect:**
```
$sendEmbedMessage[$channelID;Hello World;Title text]
```




## Example
```
$nomention
$sendEmbedMessage[$channelID;;Hello;;How are you doing?;#A7C7E7;;;;;;;yes;no]
```
