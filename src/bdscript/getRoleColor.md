# $getRoleColor
Returns a role's [color hex](https://htmlcolorcodes.com/color-picker).

## Usage
```php
$getRoleColor[roleID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| roleID | The role to get the [color hex](https://htmlcolorcodes.com/color-picker) from. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$description[<@$authorID>'s color: `#$getRoleColor[$highestRole[$authorID]]`]
$color[$getRoleColor[$highestRole[$authorID]]]
```
![](https://user-images.githubusercontent.com/69215413/123296726-e7b59080-d4e4-11eb-8b7d-4712af14faa6.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*