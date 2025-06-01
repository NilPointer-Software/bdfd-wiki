# $footerIcon
Sets the embed footer icon.

## Syntax
```
$footerIcon[Icon URL;(Index)]
```

```admonish failure
`$footerIcon[]` will not work if there is no text provided in [`$footer[]`](./footer.md).
```

### Parameters
- `Icon URL` `(Type: URL || Flag: Emptiable)`: The URL to set the footer icon as. Must be a valid image URL.
- `Index` `(Type: Integer || Flag: Vacantable)`: What embed the footer icon should belong to. The default is `1`. [(learn more)](../resources/embedIndexes.md)

## Example
```
$nomention
$footer[⬅️ That is the footer icon. This is the footer text.]
$footerIcon[$authorAvatar]
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
    footer:
      text: ⬅️ That is the footer icon. This is the footer text.
      image: https://user-images.githubusercontent.com/111157596/257052136-4b8d5715-b381-4d5f-8c46-8ae0be53c8d8.png
```
