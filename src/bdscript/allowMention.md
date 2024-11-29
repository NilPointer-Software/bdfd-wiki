# $allowMention
Disables replacing mentions in `$message` with text. 

## Syntax
```
$allowMention
```

## Example
```
$nomention
$allowMention
$message
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <@RainbowKey>
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    <@RainbowKey>
```

- Without `$allowMention`:

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <@RainbowKey>
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    @RainbowKey
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```
