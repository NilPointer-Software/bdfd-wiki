# $customEmoji
Returns a custom emoji on the current server. 

```admonish warning title="Important"
We recommend emoji IDs instead of `$customEmoji[]` **for public** bots.
```

## Syntax
```
$customEmoji[Emoji name]
```

### Parameters
- `Emoji name` `(Type: String || Flag: Required)`: The name of the emoji to return.

## Example
```
$nomention
Hello bdfd! $customEmoji[BDFD]
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
  content: |
    Hello bdfd! <e:https://avatars.githubusercontent.com/u/63750675>
```