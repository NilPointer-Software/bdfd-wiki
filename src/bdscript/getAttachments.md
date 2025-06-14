# $getAttachments
Returns a link of the image of the current message.

## Syntax
```
$getAttachments[(Index)]
```

### Parameters
- `Index` `(Type: Integer || Flag: Required)`: The index to get the image of.

## Example
```
$nomention
$getAttachments[0]
```

```discord yaml
- user_id: 1251981607468798089
  username: Ivaylo
  color: "#E67E22"
  content: |
    !example
  attachments:
  - url: https://avatars.githubusercontent.com/u/63750675?s=100
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: " "
  attachments:
  - url: https://avatars.githubusercontent.com/u/63750675?s=100
```