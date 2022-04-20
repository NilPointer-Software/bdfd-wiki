# $nickname
Returns a user's display name.
> 🗒️ **Note:** 'display name' means the user's server nickname, but if the user doesn't have a nickname then their username is returned instead.

## Usage
```php
$nickname[(userID)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| userID | The user to change the nickname of. **\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

**\*** If `$nickname` is used without any brackets or arguments, then the author's nickname is returned.

## Example
```
$nomention
<@$mentioned[1;yes]>'s nickname is `$nickname[$mentioned[1;yes]]`
```
![](https://user-images.githubusercontent.com/69215413/124502356-53271a00-dd91-11eb-8d72-778c9141f296.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*