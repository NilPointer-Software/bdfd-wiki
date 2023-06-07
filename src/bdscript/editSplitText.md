# $editSplitText
Edits a splitted text element using it's index.

## Syntax
```
$editSplitText[Index;Value]
```

### Parameters
- `Index` `(Type: Integer || Flag: Required)`: The index of the element to edit.
- `Value` `(Type: String || Flag: Required)`: The new value to assign to the provided index.

## Example
```
$nomention

$textSplit[$message; ]

$var[Index;$splitText[$sub[$getTextSplitLength;1]]]
$var[Value;$splitText[$getTextSplitLength]]

$removeSplitTextElement[$getTextSplitLength]
$removeSplitTextElement[$getTextSplitLength]

$var[Text;$joinSplitText[ ]]

$textSplit[$var[Text];]
$editSplitText[$var[Index];$var[Value]]

Original Text: $var[Text]
New Text: $joinSplitText[]
```
![example](https://user-images.githubusercontent.com/95774950/202880969-9ce5041a-cc6c-4bd2-a275-76e9d80be5b5.png)
