# $textSplit
Splits the provided text by a given separator and saves the value temporarily.

> 📌 To retrieve the split values, use [`$splitText`](./splitText.md).

## Syntax
```
$textSplit[Text;Separator]
```

### Parameters
- `Text` `(Type: String || Flag: Emptiable)`: The text to split.
- `Separator` `(Type: String || Flag: Emptiable)`: The separator to split the text with. If this parameter is empty, it separates the text by each characters.

### Example
```
$nomention
$textSplit[Coffee, Tea, Milk;,]
$splitText[1]
```
![Screenshot_20221029_203537](https://user-images.githubusercontent.com/95774950/198839569-338c0892-80ef-4e7a-bbb7-dd696c6ab15b.png)

###### _In the above example, [`$textSplit`](#textsplit) splits the provided text using a comma (`,`) as the separator. After that, [`$splitText`](./splitText.md) is used to retrieve the first split value._

## Related Resources
- [Text Splitting Guide](../guides/textSplitting.md)
- [$getTextSplitIndex](./getTextSplitIndex.md)
- [$getTextSplitLength](./getTextSplitLength.md)
- [$joinSplitText](./joinSplitText.md)
- [$removeSplitTextElement](./removeSplitTextElement.md)
- [$splitText](./splitText.md)
