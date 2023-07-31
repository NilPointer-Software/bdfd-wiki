# $authorURL
Adds a hyperlink to the author text.

## Syntax
```
$authorURL[URL;(Index)]
```
> `$authorURL[]` will not work if there is no text provided in [`$author[]`](./author.md).

### Parameters
- `URL` `(Type: URL || Flag: Emptiable)`: The link to set as the author hyperlink.
- `Index` `(Type: Integer || Flag: Optional)`: To which embed the author URL will be added. [(learn more)](../resources/embedIndexes.md)

## Example
```
$nomention
$author[Click me to visit the BDFD website!]
$authorURL[https://botdesignerdiscord.com]
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
    author:
      text: Click me to visit the BDFD website!
      url: https://botdesignerdiscord.com
```
