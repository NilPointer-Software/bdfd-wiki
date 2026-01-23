# $userInfo
Allows you to make a 'user info' command without using a bunch of different functions at once. Returns information of the first mentioned user.

```admonish fail
[`$userInfo`](./userInfo.md) automatically generates a description. So, [`$description`](./description.md) of index `1` should be avoided in the code.
```

## Syntax
```
$userInfo[Message]
```

### Parameters
- `Message` `(Type: String || Flag: Required)`: The message format. Check below for more information.

#### Sub-functions
- Following are sub-functions which you can use inside `$userInfo[]` to return information of **the mentioned** user:

Name              | Description                                               | Replacement
------------------|-----------------------------------------------------------|-------------
`{username}`      | Returns the user's username.                              | [`$username[]`](./usernameComplex.md)
`{ID}`            | Returns the ID of the user.                               | [`$findUser[]`](./findUser.md)
`{BOT}`           | Returns `true` if the user is a bot otherwise, `false`.   | [`$isBot[]`](./isBot.md)
`{discriminator}` | Returns the user's discriminator. *(Depreacted)*          | [`$discriminator[]`](./discriminator.md) *(Only For Bots)*

## Example
```
$nomention
$title[User Info]
$userInfo[Username: {username}
User ID: {ID}
Bot?: {BOT}
Discriminator: {discriminator}]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  highlight: true
  content: |
    !example <@RainbowKey>
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
  embed:
    title: User Info
    description: "Username: rainbow_key\n
      User ID: 803569638084313098\n
      Bot?: false\n
      Discriminator: 0000"
```

```admonish tip
[`$userInfo`](./userInfo.md) automatically generates a thumbnail of the mentioned user. If you want to remove it, put [`$thumbnail[]`](./thumbnail.md) (with empty argument) below [`$userInfo`](./userInfo.md) function.
```
