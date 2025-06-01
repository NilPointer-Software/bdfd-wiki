# $addTimestamp
Adds a timestamp to an embed.

## Syntax
```
$addTimestamp
```

## Example
```
$nomention
$footer[That is the timestamp =>]
$addTimestamp
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  embed: 
    footer:
      text: It's a timestamp => <span class="discord-message-timestamp">Today at 00:00</span>
```

```admonish question title="What is this?"
How [`$footer[]`](./footer.md) works?
```

```admonish note
[`$footer[]`](./footer.md) is not required to use with `$addTimestamp`.
```
