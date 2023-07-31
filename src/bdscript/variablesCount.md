# $variablesCount
Returns how many of a certain variable type the bot has.

## Syntax
```
$variablesCount[Type]
```

### Parameters
- `Type` `(Type: Enum || Flag: Required)`: The variable type to return the count for. Accepts either `user`, `server`, `channel`, or `globaluser` as input.

## Example
```
$nomention
$variablesCount[server]
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
    4
```
