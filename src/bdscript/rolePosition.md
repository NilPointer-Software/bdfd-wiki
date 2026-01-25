# $rolePosition
Returns a role's position *(1 being the highest role)*.

## Syntax
```
$rolePosition[Role ID]
```

### Parameters
- `Role ID` `(Type: Snowflake || Flag: Required)`: The role for which to get it's position.

## Example
```
$nomention
Role Position: $rolePosition[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 568155071997542410
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Role Position: 6
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```