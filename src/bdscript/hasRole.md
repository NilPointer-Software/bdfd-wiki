# $hasRole
Returns whether or not a user has the provided role. 'true' means the user has the role, 'false' means they don't.

## Usage
```php
$hasRole[userID;roleID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| userID | The user to check for the role. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| roleID | The role to check the user for. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$hasRole[$authorID;$roleID[Admin]]
```
![](https://user-images.githubusercontent.com/69215413/126073798-d4178684-6181-4130-9d9e-12a91010b80c.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*