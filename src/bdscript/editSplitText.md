# $editSplitText
Edits a splitted text element using it's index.

## Syntax
```
$editSplitText[Index;Value]
```

### Parameters
- `Index`: The index of the element to edit.
- `Value`: The new value to assign to the provided index.

## Example
```
$nomention
$textSplit[$message; ]

$var[Index;$splitText[$sub[$getTextSplitLength;1]]]
$var[Value;$splitText[$getTextSplitLength]]

$removeSplitTextElement[$getTextSplitLength]
$removeSplitTextElement[$sub[$getTextSplitLength;1]]

$var[Text;$joinSplitText[]]

$textSplit[$var[Text];]
$editSplitText[$var[Index];$var[Value]]

Original Text: $var[Text]
New Text: $optOff[$joinSplitText[]]
```
![example](https://user-images.githubusercontent.com/95774950/202880969-9ce5041a-cc6c-4bd2-a275-76e9d80be5b5.png)
