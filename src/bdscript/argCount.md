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
  color: "#E67E22"
  content: |
    !example Hello noit!
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Word count: 2
```
