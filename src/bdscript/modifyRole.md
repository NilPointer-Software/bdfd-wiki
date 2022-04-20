# $modifyRole
Modifies a role.

## Usage
```php
$modifyRole[role ID;(name;color;hoisted;mentionable)]
```
> 🧠 **Tip:** You can use `!unchanged` as a argument to leave the setting as-is.

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| roleID | The ID of the role to modify. |[Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| name | The new role name. | [String](/src/resources/arguments/types.md#string) | [Optional](/src/resources/arguments/flags.md#optional)
| color | The new role color. | [Color](/src/resources/arguments/types.md#color) | [Optional](/src/resources/arguments/flags.md#optional)
| hoisted | Whether the role should be displayed separately. | [Bool](/src/resources/arguments/types.md#bool) | [Optional](/src/resources/arguments/flags.md#optional)
| mentionable | Whether the role should be mentionable by everyone. | [Bool](/src/resources/arguments/types.md#bool) | [Optional](/src/resources/arguments/flags.md#optional)

## Example
```
$nomention
$argsCheck[>2;❌ Please provide the needed arguments! Usage: `!role-name (role) (newRoleName)`]
$onlyPerms[manageroles;❌ You are missing the manage_roles permission!]
$modifyRole[$findRole[$message[1]];$replaceText[$message;$message[1];;1];!unchanged;!unchanged;!unchanged]
$description[✅ Changed role name of <@&$findRole[$message[1]]>]
```
![](https://user-images.githubusercontent.com/69215413/123530371-771a9980-d6c7-11eb-987d-c4ba3bb40bd1.png)