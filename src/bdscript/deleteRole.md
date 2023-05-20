# $deleteRole
Deletes a role.

## Syntax
```
$deleteRole[Role ID]
```

### Parameters
- `Role ID` `(Type: Snowflake || Flag: Required)`: The role to delete.

### Permissions
Required permissions that the bot must have for this function to work properly:
- `manageroles`

## Example
```
$nomention
$onlyPerms[manageroles;❌ You are missing the `MANAGE_ROLES` permission!]
$argsCheck[>1;Please provide a role to delete!]
$onlyIf[$findRole[$message]!=;Invalid role!]
$deleteRole[$findRole[$message]]
Deleted the role!
```
![example](https://user-images.githubusercontent.com/111157596/239688806-0699dbf1-3684-4a4a-9cdf-f191ad0b90fd.png)\
![example](https://user-images.githubusercontent.com/111157596/239688761-3bd88f60-8a5c-48e9-9b23-677b2e4ecd17.png)
