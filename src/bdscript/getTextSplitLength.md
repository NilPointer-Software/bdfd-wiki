# $getTextSplitLength
Returns the number of splits in [`$textSplit[]`](./textSplit.md).

> 🧙‍♂️ This function can't be used, if `$textSplit[]` isn't present in the code.

## Syntax
```
$getTextSplitLength
```

## Example
```
$nomention
$textSplit[Hello | Hi | Hey; | ]
The text has been split into $getTextSplitLength elements!
```
![example](https://user-images.githubusercontent.com/111157596/233414862-1bb20a46-f0f3-4785-b25d-dd3e79e01fd9.png)

> For more info, see the [Text Splitting Guide](../guides/general/textSplitting.md).
