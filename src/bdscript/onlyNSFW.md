# $onlyNSFW
Only allows the command to be executed in [NSFW channels](https://support.discord.com/hc/en-us/articles/115000084051-NSFW-Channels-and-Content), else the error message is returned.

## Usage
```php
$onlyNSFW[errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| errorMessage | Message returned when the channel isn't a NSFW channel. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)


## Example
```
$nomention
$onlyNSFW[❌ That command can only be used in NSFW channels.]
$c[Put your code here.]
```

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*