# $onlyIfMessageContains
The command can only be executed if the 'text' contains all the 'phrases', otherwise the 'errorMessage' is returned.

## Usage
```php
$onlyIfMessageContains[text;phrase;...;errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| text | The text to check. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)
| phrase | The phrase(s) that the text must contain. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)
| errorMessage | Message returned if the text doesn't have the 'phrases'. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

## Examples
### Example #1
```
$nomention
$onlyIf[$message;noituri;]
Noituri is epic!
```
> 🤔 **Explanation:** Command will only execute if `$message` contains `noituri`, else nothing gets returned.

### Example #2
```
$nomention
$onlyIf[$message;bartek;]
Bartek is cool!
```
> 🤔 **Explanation:** Command will only execute if `$message` contains `bartek`, else nothing gets returned.


### Example #3
```
$nomention
$onlyIf[$message;kubastick;]
Kubastick is charming!
```
> 🤔 **Explanation:** Command will only execute if `$message` contains `kubastick`, else nothing gets returned.

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*