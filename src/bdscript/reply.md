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
$reply[1015287764385808524;1036936363016204339]
Replied
```
![image](https://user-images.githubusercontent.com/113247745/199205538-8cba8ff3-9aa4-4bbd-b8f9-7e8248f10667.png)
