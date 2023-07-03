# $slowmode
Sets a slowmode for the provided channel.

> With slowmode enabled in a channel, it will limit the number of messages a user is able to send in a channel based on a timed cooldown. `$slowmode[]` is used to change a channel's slowmode using a bot.

## Syntax
```
$slowmode[Channel ID;Slowmode time]
```

### Parameters 
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel in which the slowmode is being modified in.
- `Slowmode time` `(Type: Duration || Flag: Required)`: The new slowmode delay *(in seconds, e.g. `1s`, `180s`, `5s`, `3s`, etc)*. Use `0`/`0s` to disable the slowmode.

  > 🧙‍♂️ Slowmode time can't be set over 6 hours/21600 seconds.

### Permissions
Required permissions that the bot must have for this function to work properly:
- `managechannels`

## Example
```
$nomention
$argsCheck[>1;:x: Incorrect Usage! Example: `!slowmode 5s`]
$slowmode[$mentionedChannels[1;yes];$message[1]]
Slowmode changed to $message[1]!
```

![example](https://user-images.githubusercontent.com/69215413/126920569-eef1a425-e57d-4062-ba1f-84a09c17ed84.png)
