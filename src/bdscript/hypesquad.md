# $hypesquad
Returns the hypesquad house name of the provided user.

## Syntax
```
$hypesquad[User ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The ID of the user whose hypesquad house name should be returned.

## Example
```
$nomention
You are in $hypesquad[$authorID] house.
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    You are in balance house.
```
