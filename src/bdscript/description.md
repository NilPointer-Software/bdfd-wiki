# $description
Adds a description to the embed.

## Usage
```
$description[text;(optional) embedIndex]
```

### Breakdown
- `text` - The text to set the description as. It cannot exceed more than 4096 characters.
- `embedIndex` - What embed the description should belong to. Default is `1`. [(learn more)](/src/resources/embedIndexes.md)

## Example
```
$nomention
$description[This is a description! 😎]
```

![example](https://user-images.githubusercontent.com/69215413/125975247-34376dd7-faa1-4426-a774-59294a3962c0.png)
