# $editMessage
Edits one of the bot's messages.

## Usage
```
$editMessage[channelID;messageID;newMessage;(optional) title;(optional) description;(optional) color;(optional) footer]
```
> 🧙‍♂️ [How Do I Get A Channel/Message ID? (click me)](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID)

### Breakdown
- `channelID` - The channel that this message belongs to.
- `messageID` - The ID of the message to edit (must be a message that the bot sent).
- `newMessage` - The new message contents.
- `title` - The new embed title. Optional.
- `description` - The new embed description. Optional.
- `color` - The new embed color border hex. Optional.
- `footer` - The new embed footer text. Optional.

## Example
```
$nomention
$editMessage[853070225398693898;857040509549281292;This message has been edited!]
```

### Output
**Before**

![example1](https://user-images.githubusercontent.com/69215413/125876425-57ea4bf7-a357-48be-a6f6-ffb84df4be23.png)

**After**

![example2](https://user-images.githubusercontent.com/69215413/125876457-cf834ed3-f57c-41f3-b862-20433ec21b83.png)
