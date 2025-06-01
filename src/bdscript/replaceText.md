# $replaceText
Replaces 'Sample' with 'New' from 'Text', you can choose how many 'Sample' is replaced by inputting 'Amount'.

## Syntax
```
$replaceText[Text;Sample;New;(Amount)]
```

### Parameters
- `Text` `(Type: String || Flag: Emptiable)`: The text where the bot is searching for the 'Sample'.
- `Sample` `(Type: String || Flag: Emptiable)`: The text to replace with 'New'.
- `New` `(Type: String || Flag: Emptiable)`: The text to replace 'Sample' with.
- `Amount` `(Type: Integer || Flag: Optional)`: The number of times, at most, the bot should replace the sample. Use `-1` to replace all 'Sample' in 'Text' with 'New'. Default is `1`.

## Example
```
$nomention
Result 1: $replaceText[Hello world!;Hello;Bye]
Result 2: $replaceText[Hello world!;ll;o;-1]
Result 3: $replaceText[Hello world!;!;]
```

```discord yaml
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
  content: "Result 1: Bye world!\n
Result 2: Heoo world!\n
Result 3: Hello world"
```
