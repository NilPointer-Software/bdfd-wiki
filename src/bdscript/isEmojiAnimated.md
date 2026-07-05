# $isEmojiAnimated[]
Checks if the emoji's animated.

## Syntax
```
$isEmojiAnimated[Emoji ID]
```

### Parameters
- `Emoji ID` `(Type: Snowflake || Flag: Required)`: The emoji's id to check if it's animated.

## Example
```
$nomention
Is emoji animated?: $isEmojiAnimated[$message]
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
    Is emoji animated?: false
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```