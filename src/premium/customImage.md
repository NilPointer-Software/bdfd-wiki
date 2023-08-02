# $customImage
*(for premium bots)*

This function is used to return the URL of an image uploaded in the app.

## Syntax
```
$customImage[Custom image tag]
```

### Parameters
- `Custom image tag` `(Type: String || Flag: Required)`: The image tag you set in the app while uploading the image.

## Example
```
$nomention
$customImage[NiceImage]
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
  embed:
    image: https://user-images.githubusercontent.com/111157596/257596077-9836bafb-1c2a-4e1e-9cb3-9ca7725dcbf3.png
```

> For more info, see the [Custom Images Guide](../premium/customImages.md).
