# $getRoleColor
Returns a role's color hex.

## Syntax
```
$getRoleColor[Role ID]
```

```admonish tip title="Color Picker"
You can use our ["Color" tool](../tools/color.md) to test colors!
```

### Parameters
- `Role ID` `(Type: Snowflake || Flag: Required)`: The role to get the color hex from.

## Example
```
$nomention
Color: #$getRoleColor[$highestRole[$authorID]]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Color: #E67E22
```

```admonish question title="What is this?"
How [`$authorID`](./authorID.md) and [`$highestRole[]`](./highestRoleComplex.md) works?
```

