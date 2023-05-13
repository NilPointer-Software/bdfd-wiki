# $getTextSplitIndex 
Retrieves index from the provided value in [`$textSplit`](./textSplit.md). Returns -1 if it couldn't find the value.

## Usage
``` 
$getTextSplitIndex[value]
``` 

### Parameters 
- `value` `(Type: String || Flag: Emptiable)`: The value to search in the text split.

## Example 
``` 
$nomention 
$textSplit[Cake-Bread;-] 
$getTextSplitIndex[$message[1]] 
``` 

![image](https://user-images.githubusercontent.com/42785890/151845189-1866a9c2-cacb-401b-9efe-137cc54586b6.png)

[*See more in the Text Splitting guide...*](../guides/general/textSplitting.md)
