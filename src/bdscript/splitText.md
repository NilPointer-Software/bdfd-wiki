# $splitText
Retrieves a value from [`$textSplit[]`](./textSplit.md).

> ⚠️ This function is used with `$textSplit[]`.

## Syntax
```
$splitText[Index]
```

### Parameters
- `Index` `(Type: HowMany || Flag: Required)`: The split value to get (e.g. `2` for the second split). You can also use `>` to return the last split value i.e `$splitText[>]`.

## Example
```
$nomention
$textSplit[Hi-Hello-Hey;-]
$splitText[2]
```
> The above example will return output as `Hello`.

> For more info, see the [Text Splitting Guide](../guides/general/textSplitting.md).
