# $emojiExists[]
Checks if provided emoji's id exists.

```admonish tip
`true` means the emoji exists, `false` means they don’t.
```

## Syntax
```
$emojiExists[Emoji ID]
```

### Parameters
- `Emoji ID` `(Type: Snowflake || Flag: Required)`: The id to check for.

## Example
```
$nomention
Emoji exists?: `$emojiExists[$message]`
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 760463263879135242
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Emoji exists?: <code>true</code>
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example idhoshkxbidho
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Emoji exists?: <code>false</code>
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example doge
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Emoji exists?: <code>false</code>
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```