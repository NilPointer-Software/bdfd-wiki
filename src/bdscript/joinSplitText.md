# $joinSplitText
Joins [`$textSplit[]`](./textSplit.md) values with a provided separator.

## Syntax
```
$joinSplitText[Separator]
```

### Parameters
- `Separator` `(Type: String || Flag: Emptiable)`: The separator to be put between the text split values.

## Example
We are joining the text split value with a new line, replacing the provided separator in `$textSplit[]`.
```
$nomention
$textSplit[Hello-hi-hey;-]
$joinSplitText[
]
```
![example](https://user-images.githubusercontent.com/111157596/233783300-4fee89bc-0b5c-4b32-b4a1-b00778f9ec98.png)

> For more info, see the [Text Splitting Guide](../guides/general/textSplitting.md).
