# $roleGrant
Assigns or removes the specified role to the specified user.

## Usage
```
$roleGrant[userID;+/-roleID;...]
```
| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| userID | The user id to which the specified role(s) will be assigned or removed | [Snowflake ](/src/resources/arguments/types.md#snowflake ) | [Required](/src/resources/arguments/flags.md#required)
| roleID | The ID of the role to be assigned or removed. **\*** | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

**\*** Put a '+' sign in front of the role's id to give the role or a '-' sign to remove the role.

## Examples
### Example 1
> Assigning a role to the mentioned user
```
$nomention
$roleGrant[$mentioned[1];+ROLE_ID]
$c[Replace the ROLE_ID with the ID of the role to be assigned.]
```
### Example 2
> Removing a role from the mentioned user.
```
$nomention
$roleGrant[$mentioned[1];-ROLE_ID]
$c[Replace the ROLE_ID with the ID of the role to be assigned.]
```
### Example 3
> Assigns and removes the specified roles to the mentioned user.
```
$nomention
$roleGrant[$mentioned[1];+ROLE_ID_1;-ROLE_ID_2]
$c[Replace ROLE_ID_1 with the ID of the role to be assigned and ROLE_ID_2 with the ID of the role to be removed.]
```

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*
