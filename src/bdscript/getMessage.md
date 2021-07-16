# $getMessage
Gets data from a message, with the provided message and channel IDs.

## Usage
```
$getMessage[channelID;messageID;(optional) property]
```

### Breakdown
- `channelID` - The channel that this message belongs to.
- `messageID` - The message to get the data from.
- `property` - The message data to get. Default is `content`. Message properties:
  - `content` - The content of this message.
  - `authorID` - The ID of the message author.
  - `username` - The username of the message author.
  - `avatar` - The avatar of the message author.

## Example
```
$nomention
$argsCheck[>2;Please provide a channel and messahe ID! Usage: `!quote (channel) (messageID)`]
$description[$getMessage[$findChannel[$message[1]];$message[2]]]
$color[#673ab7]
$authorIcon[$getMessage[$findChannel[$message[1]];$message[2];avatar]]
$author[$getMessage[$findChannel[$message[1]];$message[2];username]#$discriminator[$getMessage[$findChannel[$message[1]];$message[2];authorID]]]
```

![example](https://user-images.githubusercontent.com/69215413/122654424-3e078580-d119-11eb-9524-e68f08f787d7.png)
