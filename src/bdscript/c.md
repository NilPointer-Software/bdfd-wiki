# $c
Adds a comment to the code. Comments do not appear in the bot's response.

## Syntax
```
$c[Comment]
```

### Parameters 
- `Comment` `(Type: String || Flag: Emptiable)`: Any text. This text will not be taken into account during processing. Commonly used to add notes to the code.

## Example
```
$nomention
$message
$c[This is a say command. You are reading a comment!]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example As you can see, the comment doesn't appear! Pretty cool; right?
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    As you can see, the comment doesn't appear! Pretty cool; right?
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```
