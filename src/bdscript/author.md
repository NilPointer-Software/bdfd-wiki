# $author
Adds author text to an embed.

## Usage
```
$author[text;(index)]
```

### Breakdown
- `text` - The text that appears in the author text. It cannot exceed more than 256 characters.
- `index` - What embed the author text should belong to (Optional). Default is `1`. [(learn more)](../resources/embedIndexes.md)

## Example
```
$nomention
$author[This is the author text!]
```
![example](https://user-images.githubusercontent.com/69215413/119855770-32d98500-bee0-11eb-830c-bfb8b65fac7f.png)
