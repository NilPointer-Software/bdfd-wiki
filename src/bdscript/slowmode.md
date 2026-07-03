# $slowmode
Sets a slowmode for the provided channel.

> With slowmode enabled in a channel, it will limit the number of messages a user is able to send in a channel based on a timed cooldown. `$slowmode[]` is used to change a channel's slowmode using a bot.

## Syntax
```
$slowmode[Channel ID;Slowmode time]
```

### Parameters 
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel in which the slowmode is being modified in.
- `Slowmode time` `(Type: Duration || Flag: Required)`: The new slowmode delay *(e.g. `5`, `10s`, `40m`, `1h`, etc)*. Use `0`/`0s` to disable the slowmode.

> Slowmode time can't be set over 6 hours/21600 seconds.

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

``` discord yaml
- user_id: 1251981607468798089
  color: "#E67E22"
  content: |
    !slowmode 5s
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Slowmode changed to 5s!
```

```admonish question title="What is this?"
How [`$argsCheck`](./argsCheck.md) works?
```
