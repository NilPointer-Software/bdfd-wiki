# $findUser
Finds a user's ID using username, ID, or mention in the current server.

## Syntax
```
$findUser[User;(Return author ID?)]
```

### Parameters
- `User` `(Type: String || Flag: Emptiable)`: The user's username, ID, or mention to find.
- `Return author ID?` `(Type: Bool || Flag: Optional)`: Whether to return the author ID if no user was found. The default is `yes`.

## Example
```
$nomention
User ID: $findUser[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example BDFD Support
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    User ID: 1009018156494368798
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```
