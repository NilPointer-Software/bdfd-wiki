# $argCount
Returns how many words (aka arguments/args) are in the provided text.

## Syntax
```
$argCount[Text]
```

### Parameters
- `Text` `(Type: String || Flag: Emptiable)`: The text to get the word count for.

## Example
```
$nomention
Word count: $argCount[$message]
```
```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example Hello noit!
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Word count: 2
```
