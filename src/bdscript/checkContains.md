# $checkContains
Checks if the 'text' contains at least one of the provided 'phrases'.

## Syntax
```
$checkContains[Text;Phrases;...]
```

### Parameters
- `Text` `(Type: String || Flag: Emptiable)`: The text that will be checked.
- `Phrases` `(Type: String || Flag: Emptiable)`: The phrases/words the bot will check for in `Text`. Separate phrases using `;`.

## Example
```
$nomention
$checkContains[$message;hi;hello]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example bye
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    false
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example hello
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    true
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example hi bye
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    true
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```
