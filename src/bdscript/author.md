# $author
Adds author text to an embed.

## Syntax
```
$author[Text;(Index)]
```

### Parameters
- `Text` `(Type: String || Flag: Emptiable)`: The text that appears in the author text. It cannot exceed more than 256 characters.
- `Index` `(Type: Integer || Flag: Optional)`: To which embed the author text will be added. [(learn more)](../resources/embedIndexes.md)

## Example
```
$nomention
$author[This is the author text!]
```
``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !author

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: " "
  embed:
    author:
      text: This is the author text!
```
