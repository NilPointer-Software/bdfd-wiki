# $deleteRole
Deletes a role.

## Usage
```
$deleteRole[roleID]
```

### Breakdown
- `roleID` - The role to delete.

## Example
```
$nomention
$onlyPerms[manageroles;You are missing permissions!]
$argsCheck[>1;Please provide a role to delete!]
$onlyIf[$findRole[$message]!=;Invalid role!]
$deleteRole[$findRole[$message]]
Deleted role!
```

![example1](https://user-images.githubusercontent.com/69215413/125974782-09c332da-332b-4944-bb1c-b135fa6b5961.png)

![example2](https://user-images.githubusercontent.com/69215413/125974818-25d5f88c-7683-4c7b-a5cc-b37d1bb672f1.png)
