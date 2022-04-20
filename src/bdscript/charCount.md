# $charCount
Gets the amount of characters in the provided 'text'.

## Usage
```php
$charCount[text]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| text | The text to get the character count of. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)


## Examples
### Example  #1
```
$nomention
$charCount[$message]
```
> 🤔 **Explanation:** This command returns how many characters are in the author's message.

![](https://user-images.githubusercontent.com/69215413/141666839-8585841b-5673-4f2d-bba0-fd8c96b29aef.png)

### Example #2
```
$nomention
$charCount[Hello World!]
```
![](https://user-images.githubusercontent.com/69215413/141666869-90501b0f-67ad-4fd1-9114-cfbf318b000b.png)


### Example #3
```
$nomention
$charCount[]
```
![](https://user-images.githubusercontent.com/69215413/141666870-77d9fb89-f8c2-4381-bff6-3c7fddd877d3.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*