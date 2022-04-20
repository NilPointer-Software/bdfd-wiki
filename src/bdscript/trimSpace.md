# $trimSpace
Removes spaces from the start and end of the provided text.

## Usage
```php
$trimSpace[text]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| text | The text to trim spaces for. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

## Examples
### Example #1
```
$nomention
$trimSpace[   Hello World   ] $c[Returns "Hello World"]
```

### Example #2
```
$nomention
$trimSpace[Hello World    ] $c[Returns "Hello World"]
```

### Example #3
```
$nomention
$trimSpace[
Hello World   
] $c[Returns "Hello World"]
```

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*