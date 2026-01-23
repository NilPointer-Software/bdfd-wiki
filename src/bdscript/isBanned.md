# $isBanned
Returns whether a user is banned from the current server or not. Requires the `BAN_MEMBERS` permission.

```admonish info
`true` means the user is banned, `false` means they aren't.
```

## Syntax
```
$isBanned[User ID]
```

### Parameters 
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to check its ban status.

## Example
```
$nomention
Banned?: $isBanned[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 551786741296791562
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Banned?: true
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```