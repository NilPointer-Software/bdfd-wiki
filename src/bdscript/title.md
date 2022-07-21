# $title
Sets the embed title.

## Usage
```
$title[text;(optional) embedIndex]
```

### Breakdown
- `text` - The text to set the title as. It cannot exceed more than 256 characters.
- `embedIndex` - What embed the title should belong to. Default is `1`. [(learn more)](../resources/embedIndexes.md)

## Example
```
$nomention
$title[This is a title!]
$description[⬆️ That is a nice title.]
```

![example](https://user-images.githubusercontent.com/69215413/123186040-4c310b00-d465-11eb-99b1-6c43828c8ddb.png)
