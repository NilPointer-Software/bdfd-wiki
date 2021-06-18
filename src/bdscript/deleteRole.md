# $deleteRole
Deletes a role.

## Usage
```
$deleteRole[roleID]
```

### Breakdown
`roleID` - The role to delete.

## Example
```
$nomention
$onlyPerms[manageroles;You are missing permissions!]
$argsCheck[>1;Please provide a role to delete!]
$onlyIf[$findRole[$message]!=;Invalid role!]
$deleteRole[$findRole[$message]]
Deleted role!
```
