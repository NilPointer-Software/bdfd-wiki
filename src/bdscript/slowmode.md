# $slowmode
With slowmode enabled in a channel, it'll limit the number of messages a user is able to send in a channel based on a timed cooldown. `$slowmode[]` is used to change a channel's slowmode using a bot.
> 🧙‍♂️ Slowmode delay can't be set over 6 hours/21600 seconds. Also, in order for the bot to run `$slowmode[]` successfully, it needs the 'Manage Channels' permission.

## Usage
```
$slowmode[channelID;delay]
```

### Breakdown
- `channelID` - The channel in the which the slowmode is being modified in. Use `0`/`0s` to disable the slowmode.
- `delay` - The new slowmode delay *(in seconds, e.g. 1s, 180s, 5s, 3s, etc)*.

### Example
```
$nomention
$argsCheck[>1;:x: Incorrect Usage! Example: `!slowmode 5s`]
$slowmode[$mentionedChannels[1;yes];$message[1]]
Slowmode changed to $message[1]!
```

![example](https://user-images.githubusercontent.com/69215413/126920569-eef1a425-e57d-4062-ba1f-84a09c17ed84.png)
