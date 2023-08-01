# $authorIcon
Adds an icon to the author section in the embed.

## Syntax
```
$authorIcon[Image URL;(Index)]
```

> `$authorIcon[]` will not work if there is no text provided in [`$author[]`](./author.md).

### Parameters
- `Image URL` `(Type: URL || Flag: Emptiable)`: The image for the author icon. This must be a valid image URL.
- `Index` `(Type: Integer || Flag: Optional)`: To which embed the author icon will be added. [(learn more)](../resources/embedIndexes.md)

## Example
```
$nomention
$authorIcon[$authorAvatar]
$author[⬅️ That is the author icon. This is the author text.]
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
  content: <none>
  embed:
    author:
      text: ⬅️ That is the author icon. This is the author text.
      image: https://user-images.githubusercontent.com/111157596/257052136-4b8d5715-b381-4d5f-8c46-8ae0be53c8d8.png
```
