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
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Your message has 12 characters.
```
