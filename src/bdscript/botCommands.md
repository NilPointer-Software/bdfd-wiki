# $botCommands
Returns a list of the bot's commands.

## Syntax
```
$botCommands[Separator]
```

### Parameters
- `Separator` `(Type: String || Flag: Required)`: Will be used to separate each command.

## Example
```
$nomention
$botCommands[🔹]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    !help🔹!server🔹!bdfd
```
