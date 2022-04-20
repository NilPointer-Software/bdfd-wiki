# $isHoisted
Returns if a role is displayed separately. 'true' means the role is hoisted, 'false' means the role isn't hoisted.

## Usage
```php
$isHoisted[roleID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| roleID | The role that gets checked. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$isHoisted[$findRole[$message]]
```
![](https://user-images.githubusercontent.com/69215413/126853587-2be4d152-7254-4424-9fa0-5ab1d93837f7.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*