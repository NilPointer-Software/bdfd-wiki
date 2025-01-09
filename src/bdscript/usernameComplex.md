# $username[]
Returns the username for the provided user ID.

## Syntax
```
$username[User ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to get the username for.

## Example
```
$nomention
$username just hugged $username[$mentioned[1]]!
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <@MineBartekSA>
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    RainbowKey just hugged <@MineBartekSA>!
```

```admonish question title="What is this?"
How [`$username`](./username.md) and [`$mentioned[]`](./mentioned.md) works?
```
