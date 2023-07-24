# $charCount
Returns the amount of characters in the provided "Text".

## Syntax
```
$charCount[Text]
```

### Parameters
- `Text` `(Type: String || Flag: Emptiable)`: The text to return the character count for.

## Example
```
$nomention
Your message has $charCount[$message] characters.
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example Hello World!

- username: BDFD Support
  color: "#b9a0e0"
  bot: true
  content: |
    Your message has 12 characters.
```
