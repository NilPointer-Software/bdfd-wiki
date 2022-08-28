# $splitText
Retrieves a value from [`$textSplit`](./textSplit.md).

> ⚠️ This function is used with `$textSplit`.

## Usage
```
$splitText[index]
```

### Breakdown
- `index` - The split value to get (e.g 2 for the second split). You can also use `>` to return the last splitted value i.e `$splitText[>]`.

### Example
```
$nomention
$textSplit[Hi-Hello-Hey;-]
$splitText[2]
```
> The above example will return output as `Hello`.

[*See more in the Text Splitting guide...*](../guides/textSplitting.md)
