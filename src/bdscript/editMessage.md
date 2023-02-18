# $editMessage
Edits one of the bot's messages.

## Usage
```
$editMessage[channelID;messageID;content;(title;description;color;footer)]
```
> 🧙‍♂️ [How Do I Get The Channel / Message ID? (click-me)](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID)

### Parameters
- `channelID` `(Type: Snowflake || Flag: Required)`: The channel that this message belongs to.
- `messageID` `(Type: Snowflake || Flag: Required)`: The ID of the message to edit (must be a message that the bot sent).
- `content` `(Type: String || Flag: Emptiable)`: The new message contents.
- `title` `(Type: String || Flag: Vacantable)`: The new embed title.
- `description` `(Type: String || Flag: Vacantable)`: The new embed description.
- `color` `(Type: Color || Flag: Vacantable)`: The new embed color border hex.
- `footer` `(Type: String || Flag: Vacantable)`:  The new embed footer text.

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
