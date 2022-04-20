# $onlyIf
If the condition is true, the code runs, else the error message is returned. 

## Usage
```php
$onlyIf[condition;errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| condition | The condition. | [String](/src/resources/arguments/types.md#string)[\<comparsionSymbol\>]()[String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| errorMessage | Message returned when condition is false.| [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

### Comparison Symbols
- `==` - Equal
- `!=` - Not Equal
- `<` - Less Than
- `>`- Greater Than
- `>=` - Greater Than Or Equal To
- `<=` - Less Than Or Equal To


## Examples
### Example #1
*Creating a condition to return an error when an invalid color hex is provided in the author's message:* 
```
$nomention
$onlyIf[$isValidHex[$message]==true;❌ Please provide a valid color hex!]
```

### Example #2
*Creating a condition to return an error when the day of the month is the 13th:*
```
$nomention
$onlyIf[$day!=13;❌ This command can not be used on the 13th day of the month!]
```

### Example #3
*Creating a condition to return an error when an invalid number is provided in the author's message:*
```
$nomention
$onlyIf[$isNumber[$message]==true;❌ Please provide a valid number!]
```

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*