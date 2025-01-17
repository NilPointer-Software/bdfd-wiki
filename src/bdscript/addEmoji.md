# $addEmoji
Adds an emoji to the server.

## Syntax
```
$addEmoji[Name;Image URL;Return emoji?]
```

### Parameters
- `Name` `(Type: String || Flag: Required)`: The name of the new emoji.
- `Image URL` `(Type: URL || Flag: Required)`: The image of the new emoji. The link needs to be a valid image URL.
- `Return emoji?` `(Type: Bool || Flag: Required)`: Whether to show the emoji in the bot's message or not.

## Example
```
$nomention
Added new emoji: $addEmoji[$message[2];$message[1];yes] with `$message[2]` name.
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example https://media.discordapp.net/attachments/566370477967147018/1329787837733928981/IMG_1372.png?ex=678b9cee&is=678a4b6e&hm=2eb34a60ecb7aeb70d20ab4b1c94f05d98ecd1f91ac88ed37297498bad130ab1& BDFDCompany
  attachments:
  - url: https://avatars.githubusercontent.com/u/63750675?s=100
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Added new emoji: <e:https://avatars.githubusercontent.com/u/63750675> with "<code>BDFDCompany</code>" name.
```

```admonish question title="What is this?"
How [`$message[]`](./messageComplex.md) works?
```
