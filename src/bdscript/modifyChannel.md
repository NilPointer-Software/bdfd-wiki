# $modifyChannel
Edits a channel with the data provided.
> 🧙‍♂️ You can use `!unchanged` as a argument for the option to remain in its current state.

## Usages
There are two usages of the `$modifyChannel` function.

### Usage #1
```
$modifyChannel[channelID;channelName;topic;NSFW (yes/no);position]
```

#### Breakdown
- `channelID` - The channel the bot will edit.
- `channelName` - The new channel name.
- `topic` - The new channel topic/description.
- `NSFW` - Whether the channel will be marked as NSFW or not.
- `position` - The new channel position *(1 = top)*.

### Usage #2
```
$modifyChannel[channelID;channelName;topic;NSFW (yes/no);position;categoryID]
```

#### Breakdown
Same usage as the first. The only new option is `categoryID`. This will choose what category the channel is put in.
> 🧙‍♂️ You can use `$channelID[category/channelName]` to get the ID of a category or channel.


## Example
*For this example, we will be changing the channel name from 'general' to 'chill-chat'. As well as changing the channel topic to 'A chill chat!'.*
```
$nomention
$modifyChannel[$channelID[general];chill-chat;A chill chat!;!unchanged;!unchanged]
```
