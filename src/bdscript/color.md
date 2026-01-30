# $color
Sets the embed border color.

## Syntax
```
$color[Color hex;(Index)]
```

### Parameters
- `Color hex` `(Type: Color || Flag: Emptiable)`: The color hex to set the embed border color as. You can also use color integer number.

- `Index` `(Type: Integer || Flag: Optional)`: What embed the color border should belong to. The default is `1`. [(learn more)](../resources/embedIndexes.md)

## Example
```
$nomention
$description[⬅️ That is the embed color border!]
$color[#673ab7]
```

```discord yaml
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
  content: <none>
  embed:
    description: ⬅️ That is the embed color border!
    color: "#673ab7"
```


```admonish question title="What is this?"
How [`$description[]`](./description.md) works?
```
