# $roleName
Returns a role's name.

## Usage
```php
$roleName[roleID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| roleID | The role to get the name of. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

## Example
*Returning the name of the author's highest role:*
```
$nomention
$roleName[$highestRole[$authorID]]
```
![](https://user-images.githubusercontent.com/69215413/126243723-36bf1e90-01bc-46af-bc81-2bbae05b0d01.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*