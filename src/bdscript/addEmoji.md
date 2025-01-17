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
Added new emoji: $addEmoji[$message[2];$message[1];yes] `$message[2]`
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example link BDFDCompany
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Added new emoji: <e:https://avatars.githubusercontent.com/u/63750675> <code>BDFDCompany</code>
```

```admonish question title="What is this?"
How [`$message[]`](./messageComplex.md) works?
```
