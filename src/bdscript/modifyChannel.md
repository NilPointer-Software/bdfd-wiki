# $modifyChannel
Edits a channel with the data provided.

> 🧙‍♂️ You can use `!unchanged` as an argument for the option to remain in its current state.

## Syntax
```
$modifyChannel[channelID;(channelName;topic;NSFW;position;categoryID)]
```

### Parameters 
- `channelID` `(Type: Snowflake || Flag: Required)`: The channel the bot will edit.
- `channelName` `(Type: String || Flag: Vacantable)`: New channel name.
- `topic` `(Type: String || Flag: Vacantable)`: New channel topic/description.
- `NSFW` `(Type: Bool || Flag: Vacantable)`: Whether the channel will be marked as NSFW or not.
- `position` `(Type: Integer || Flag: Vacantable)`: The new channel position *(1 = top)*.
- `categoryID` `(Type: Snowflake || Flag: Vacantable)`: The category to which the channel should belong to.

> 🧙‍♂️ You can use `$channelID[category/channelName]` to get the ID of a category or channel.

### Permissions
Required permissions that the bot must have for this function to work properly :
- `managechannels`

## Example
*For this example, we will be changing the channel name from 'general' to 'chill-chat'. As well as changing the channel topic to 'A chill chat!'.*
```
$nomention
$modifyChannel[$channelID[general];chill-chat;A chill chat!;!unchanged;!unchanged]
```
