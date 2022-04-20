# $eval
Executes every function that is provided as an argument.

> ⚠️ **Warning**: `$eval[]` should be used with caution. Remember to restrict the command with [`$onlyForIDs[]`](./onlyForIDs.md) or a similar function!

## Usage
```php
$eval[code]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| code | The code to run. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

## Example
```
$nomention
$onlyForIDs[YOUR_USER_ID;]
$eval[$message]
```
> Replace `YOUR_USER_ID` with your actual [Discord user ID](/src/resources/developerMode.md).

![](https://user-images.githubusercontent.com/69215413/141656478-41be7a34-675b-4df1-9eb1-73c2d9ecf756.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ❌ |
| BDScript 2 | ✅ |
| BDScript Unstable | ❌ |

*✅ Supported | ❌ Unsupported*