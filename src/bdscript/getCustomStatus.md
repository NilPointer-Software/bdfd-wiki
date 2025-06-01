# $getCustomStatus
Returns a user's custom status.

## Syntax
```
$getCustomStatus[User ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user whose custom status to get.

## Example
```
$nomention
Custom status: $getCustomStatus[$authorID]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Custom status: Hello! I'm RainbowKey
```

```admonish question title="What is this?"
How [`$authorID`](./authorID.md) works?
```
