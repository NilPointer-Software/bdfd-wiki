# $displayName[]
Returns the display name of the given user.

## Syntax
```
$displayName[User ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to get the display name for.

## Example
```
$nomention
Display name: $displayName[$mentioned[1]]
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <@MineBartekSA>
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Display name: MineBartekSA
```

```admonish question title="What is this?"
How [`$mentioned[]`](./mentioned.md) works?
```
