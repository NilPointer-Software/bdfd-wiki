# $editMessage
Edits one of the bot's messages.

## Usage
```
$editMessage[channelID;messageID;newMessage]
```
> [How Do I Get The Channel / Message ID? (click-me)](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID)

### Breakdown
`channelID` - The channel that this message belongs to.

`messageID` - The ID of the message to edit (must be a message that the bot sent).

`newMessage` - The new message contents.

## Example
```
$nomention
$editMessage[853070225398693898;857040509549281292;This message has been edited!]
```

### Output
**Before**

![example1](https://user-images.githubusercontent.com/69215413/123014189-a8c3f580-d393-11eb-8aa7-17f218ff3b25.png)

**After**

![example2](https://user-images.githubusercontent.com/69215413/123014326-048e7e80-d394-11eb-9adf-8b760ae0cf11.png)
