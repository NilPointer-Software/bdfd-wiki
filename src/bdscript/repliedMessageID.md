# $repliedMessageID
Returns the ID of the replied message.

> 🧙‍♂️ If the message is not a reply, nothing is returned.

## Usages
There are two usages of this function :

### Usage #1
#### Syntax
```
$repliedMessageID
```
Returns the ID of the replied message from the triggering message.

### Usage #2
#### Syntax
```
$repliedMessageID[Channel ID;Message ID]
```
Returns the ID of the replied message form the given message.

- `Channel ID` : The ID of the channel where the message is.
- `Message ID` : The ID of the message.

## Example
```
$nomention
The message ID you replied to is: $repliedMessageID
```
![example](https://user-images.githubusercontent.com/94063167/198900570-ad5b8a25-56ad-4e66-9c3e-6495406d7fda.png)
