# $userExists
Checks if a user exists in Discord using thier ID. Returns `true` if the user exists, otherwise `false` is returned.

## Syntax
```
$userExists[User ID]
```

### Parameters
- `User ID` `(Type: String, Snowflake || Flag: Required)`: The ID of the user to check.

## Example
```
$nomention
$userExists[$mentioned[1]]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <@Spen>
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    true
```

```admonish question title="What is this?"
How [`$mentioned[]`](./mentioned.md) works?
```
