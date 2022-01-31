# $getTextSplitIndex

Retrieves index from the provided value. 

## Usage
```
$getTextSplitIndex[value]
```
### Breakdown
- `1` - Returns 1 if it could find the index.
- `-1` - Returns -1 if it couldn't find the index.

## Example
```
$nomention
$textSplit[Cake;-]
$getTextSplitIndex[$message[1]]
```

![image](https://user-images.githubusercontent.com/42785890/151845189-1866a9c2-cacb-401b-9efe-137cc54586b6.png)
