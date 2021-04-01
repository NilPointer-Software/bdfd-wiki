# $slowmode
With Slowmode enabled in a channel, it'll limit the number of messages a user is able to send in a channel based on a timed cooldown. `$slowmode[]` is used to change a channel's slowmode using a bot.

## Usage
```
$slowmode[Channel ID;Delay]
```

### Breakdown
`Channel ID` - The channel in the which the slowmode is being modified in.

`Delay` - The change in delay (in seconds). E.g: 1s, 180s, 5s, 3s, etc.

### Example Command
```
$nomention
$slowmode[$mentionedChannels[1;yes];$message[1]]
Slowmode changed to $message[1]!
$argsCheck[>1;:x: Incorrect Usage! Example: `!slowmode 5s`]
```

#### Expected Output
```
Slowmode changed to ...
*slowmode gets modified*
```

## Disabling Slowmode
- If you would like to disable slowmode, use 0 or 0s as the "delay" argument.

## Limitations/Warnings
- Slowmode delay can't be set over 6 hours/21,600 seconds.

- In order for the bot to run `$slowmode[]` successfully, it needs Manage Channels permissions.
