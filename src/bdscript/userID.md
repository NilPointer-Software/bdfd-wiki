# $userID
Fetches a user's ID using their username or user-tag.

## Syntax
```
$userID[Username#Discriminator / Username]
```

### Parameters
- `Username#Discriminator / Username` `(Type: String || Flag: Emptiable)`: The user's username or user-tag (User#0000) for whom to return the ID for.

## Example
```
$nomention
$userID[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example rainbow_key
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    803569638084313098
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example kubastick
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    390515191819010058
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example BDFD Support#7678
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    1009018156494368798
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```
