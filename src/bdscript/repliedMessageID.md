# $repliedMessageID
Returns the ID of the replied message.

> 📌 If the message is not a reply, no response will be returned.

## Usages
There are two usages of this function :

### Usage #1
#### Syntax
```
$repliedMessageID
```
Returns the ID of the replied message from the author's message.

#### Example
```
$nomention
The message ID you replied to is: $repliedMessageID[$channelID;$messageID]
```
![example](https://user-images.githubusercontent.com/94063167/198900570-ad5b8a25-56ad-4e66-9c3e-6495406d7fda.png)

### Usage #2
#### Syntax
```
$repliedMessageID[Channel ID;Message ID]
```
Returns the ID of the replied message form the given message.

#### Parameters
- `Channel ID` : The channel where the message is located.
- `Message ID` : The message from which the ID of the replied message will be taken from.
