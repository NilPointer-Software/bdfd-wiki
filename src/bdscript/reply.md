# $reply
Replies to the user's message.

## Usages
There are two usages of this function:

### Usage #1
#### Syntax
```
$reply
```
Replies to the author's message.

#### Example
```
$nomention
$reply
Hello $username 👋🏻
```
![image](https://user-images.githubusercontent.com/42785890/151721130-51524143-b136-4cfc-b028-694b1d09e84a.png)

### Usage #2
#### Syntax
```
$reply[Channel ID;Message ID]
```
Replies to a provided message.

#### Parameters
- `Channel ID`: The channel where the message is.
- `Message ID`: The message to reply.

#### Example
```
$nomention
$reply[$mentionedChannels[1];$noMentionMessage]
Replied!
```
![image](https://user-images.githubusercontent.com/113247745/199210421-a7833741-34ff-4670-99d5-d756ef85629e.png)
