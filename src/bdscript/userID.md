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
$userID[$username]
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
  content: |
    803569638084313098
```

```admonish question title="What is this?"
How [`$username`](./username.md) works?
```
