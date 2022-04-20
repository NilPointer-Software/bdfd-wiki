# $argCount
Returns how many words (technically referred to as "arguments" or "args") are in the provided text.

## Usage
```php
$argCount[text]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| text | The text to get argument count for. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

## Examples
### Example #1
```
$nomention
$argCount[$message]
```
![](https://user-images.githubusercontent.com/69215413/141665812-3ca498f2-0d6c-41c5-8479-e29deb9605ca.png)

> 🤔 **Explanation:** Returns the argument count of the user's message.

### Example #2
```
$nomention
$argCount[Hello World]
```
![](https://user-images.githubusercontent.com/69215413/141665813-ea968369-20bb-4e82-88a1-f57de4f810ac.png)


### Example #3
```
$nomention
$argCount[]
```
![](https://user-images.githubusercontent.com/69215413/141665814-8d7c35e3-e430-4d3e-8bff-51db9a67f4d5.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*