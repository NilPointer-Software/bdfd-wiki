# $addTimestamp[]
Adds a timestamp to a specific embed.

## Syntax
```
$addTimestamp[index]
```

### Parameters

| Argument | Description                                                                                                        | Type    | Flag       |
|----------|--------------------------------------------------------------------------------------------------------------------|---------|------------|
| index    | To which embed the timestamp should be added to. [(learn more)](../resources/embedIndexes.md)                      | Integer | Optional   |


## Example
```
$nomention
$description[Hi!]
$description[Timestamp!;2]
$footer[That is the timestamp =>;2]
$addTimestamp[2]
```
![example](https://user-images.githubusercontent.com/113303649/211189667-92fc90ff-0cca-4963-a649-8b39508d0968.png)

