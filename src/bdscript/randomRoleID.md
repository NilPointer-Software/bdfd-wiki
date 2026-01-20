# $randomRoleID
Returns a random role ID from the current server or from the provided server.

## Syntax
```
$randomRoleID[(Guild ID)]
```

### Parameters
- `Guild ID` `(Type: Snowflake || Flag: Optional)`: The server from which to get a random role ID. _(Defaults to the current server)_

## Example
```
$nomention
Random Role: $roleName[$randomRoleID[]]
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
    Random Role: Owner
```

~~~admonish warn

It can return the `@everyone` role ID!

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
    Random Role: <@everyone>
  highlight: true
```

~~~

```admonish question title="What is this?"
How [`$roleName[]`](./roleName.md) works?
```
