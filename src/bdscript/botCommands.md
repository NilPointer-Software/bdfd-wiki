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
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    !help🔹!server🔹!bdfd
```
