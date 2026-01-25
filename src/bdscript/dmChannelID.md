# $dmChannelID
Retrieves the DM channel ID for the provided user id.

## Syntax
```
$dmChannelID[User ID]
```
### Parameters
- `user ID` `(Type: Snowflake || Flag: Required)`: The user for whom to fetch the DM channel ID

## Example
```
$nomention
ID: $dmChannelID[$authorID]
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
    ID: 1011919618610311189
```

```admonish question title="What is this?"
How [`$authorID`](./authorID.md) works?
```
