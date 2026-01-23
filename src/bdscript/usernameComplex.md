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
You just hugged $username[$mentioned[1]]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <@Kuba>
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    You just hugged kubastick
```

```admonish question title="What is this?"
How [`$mentioned[]`](./mentioned.md) works?
```
