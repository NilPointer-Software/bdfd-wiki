# $addTimestamp[]
Adds a timestamp to an embed index.

## Syntax
```
$addTimestamp[index]
```
## Parameters
- `index`: To which embed the timestamp will be added. [learn more](../resources/embedIndexes.md)
## Example
```
$nomention
$description[Hi!]
$description[Timestamp!;2]
$footer[That is the timestamp =>;2]
$addTimestamp[2]
```
![example](https://user-images.githubusercontent.com/113303649/211189667-92fc90ff-0cca-4963-a649-8b39508d0968.png)

