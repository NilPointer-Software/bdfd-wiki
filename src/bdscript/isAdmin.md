# $isAdmin
Returns whether or not the provided user has the administrator permission. 'true' means the user has the administrator permission, 'false' means they don't.

## Usage
```php
$isAdmin[userID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| userID | The user to check. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
Are You A Admin?: `$isAdmin[$authorID]`
```
![](https://user-images.githubusercontent.com/69215413/123517122-5e7d9580-d66d-11eb-82d2-fd2300b1ecdb.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*