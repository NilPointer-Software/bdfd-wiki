# $getTextSplitIndex
Returns the argument index of a value separated by the 'splitter' in [`$textSplit[]`](./textSplit.md). `-1` is returned if no value in [`$textSplit[]`](./textSplit.md) matches `value`.

## Usage
```php
$getTextSplitIndex[value]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| value | The value to get the index of. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

> **Please refer to [Text Splitting](/src/guides/textSplitting.md) guide for more info!**