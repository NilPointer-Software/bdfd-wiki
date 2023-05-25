# $getTextSplitIndex 
Retrieves index from the provided value in [`$textSplit[]`](./textSplit.md). Returns `-1` if it couldn't find the value.

## Syntax
``` 
$getTextSplitIndex[Value]
``` 

### Parameters 
- `Value` `(Type: String || Flag: Emptiable)`: The value to search in the text split.

## Example 
``` 
$nomention 
$textSplit[Cake-Bread;-] 
$getTextSplitIndex[$message[1]] 
``` 

![image](https://user-images.githubusercontent.com/42785890/151845189-1866a9c2-cacb-401b-9efe-137cc54586b6.png)

> For more info, see the [Text Splitting Guide](../guides/general/textSplitting.md).
