# $checkUserPerms
Returns 'true' if a user has all of the provided permissions, otherwise 'false' is returned.

## Usage
```
$checkUserPerms[userID;permissions;...]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| userID | The user to check the permissions of. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| permissions | The [permissions](/src/resources/permissions.md) that the bot checks for. | [Enum](/src/resources/arguments/types.md#enum) ? [Permissions](/src/resources/permissions.md) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$onlyIf[$checkUserPerms[$authorID;admin]==false;You can't use this command, because you are administrator. F in the chat!] 
You aren't a admin!
```
> 🤔 **Explanation:** This command can only be executed if the author is not a administrator.

![example](https://user-images.githubusercontent.com/69215413/122832238-10594280-d2b9-11eb-9f79-a19f2f328239.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*