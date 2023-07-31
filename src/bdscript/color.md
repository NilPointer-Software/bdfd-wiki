# $color
Sets the embed border color.

## Syntax
```
$color[Color hex;(Index)]
```

### Parameters
- `Color hex` `(Type: Color || Flag: Emptiable)`: The [color hex](https://htmlcolorcodes.com/color-picker) to set the embed border color as. You can also use color integer number.
- `Index` `(Type: Integer || Flag: Optional)`: What embed the color border should belong to (Optional). The default is `1`. [(learn more)](../resources/embedIndexes.md)

## Example
```
$nomention
$description[⬅️ That is the embed color border!]
$color[#673ab7]
```
``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !example

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: " "
  embed:
    description: ⬅️ That is the embed color border!
    color: "#673ab7"
```
