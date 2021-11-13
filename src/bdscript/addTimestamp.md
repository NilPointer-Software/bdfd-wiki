# $addTimestamp
Adds a timestamp to the embed.

## Usage
```
$addTimestamp[(optional) embedIndex]
```

### Breakdown
- `embedIndex` - What embed the timestamp should belong to. Default is `1`. [(learn more)](/src/resources/embedIndexes.md)

## Example
```
$description[Hi!]
$footer[That is the timestamp =>]
$addTimestamp
```
![example](https://user-images.githubusercontent.com/69215413/119733171-25bc8780-be47-11eb-9817-e5bb53d46af2.png)