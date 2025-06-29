# $userAvatar
Returns a user's avatar URL.

## Syntax
```
$userAvatar[User ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to return the avatar for.

## Example
```
$nomention
$image[$userAvatar[$authorID]]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  embed:
    image: https://github.com/user-attachments/assets/3f669ece-44b2-441d-9051-014c13720978
```

```admonish question title="What is this?"
How [`$image[]`](./image.md) and [`$authorID`](./authorID.md) works?
```

```admonish tip title="Image size"
You can use `?size=size` at the end of the banner URL to increase/decrease the image size. Example sizes: 1024, 2048, 4096.
(e.g. `$image[$userAvatar[$authorID]?size=4096]`)
```
