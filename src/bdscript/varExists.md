# $varExists
Checks if a variable exists. Returns `true` if it exists, otherwise `false`.

## Syntax
```
$varExists[Name]
```

### Parameters
- `Name` `(Type: String || Flag: Required)`: The variable's name to check.

## Example
```
$nomention
$varExists[$message]
```
``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example Hi
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    false
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example Money
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    true
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```
