# $random
Returns random numbers.

## Usage
```php
$random[(minimum;maximum)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| minimum | The minimum number to pick. **\*** | [Integer](/src/resources/arguments/types.md#integer) \| [Float](/src/resources/arguments/types.md#float) | [Optional](/src/resources/arguments/flags.md#optional) 
| maximum | The maximum number to pick. |  [Integer](/src/resources/arguments/types.md#integer) \| [Float](/src/resources/arguments/types.md#float) | [Optional](/src/resources/arguments/flags.md#optional) 

**\*** If `$random` is used with no arguments or brackets, then a random number between 0 and 9 is returned.

## Example
```
$nomention
🎲 You rolled `$random[1;7]`!
```
> 🗒️ **Note:** `$random[]` never returns the 'maximum' value, as it's right side exclusive range. To get a random number between 1 and 6; you'd put 7 as the 'maximum' instead of 6.

![](https://user-images.githubusercontent.com/69215413/123555172-0d939d00-d752-11eb-9d30-975bf6e8e99f.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*