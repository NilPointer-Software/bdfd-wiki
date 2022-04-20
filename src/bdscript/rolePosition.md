# $rolePosition
Returns a role's position from the top of the role hierarchy *(1 being highest role)*.

## Usage
```php
$rolePosition[roleID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| roleID | The role to get the position of. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$description[<@&$findRole[$message]>'s Position: $rolePosition[$findRole[$message]]]
```
![](https://user-images.githubusercontent.com/69215413/126246527-d3ca814d-8c7d-4acf-bb1e-ec7286c741f0.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*