# $onlyPerms
The command can only be executed if the user running the command has all the provided 'permissions'. Otherwise, the 'errorMessage' is returned.

## Usage
```
$onlyPerms[permissions;errorMessage]
```

### Breakdown
`permissions` - The required permissions [(see permissions list)](https://nilpointer-software.github.io/bdfd-wiki/guides/permissions.html).

`errorMessage` - The message that is returned when the user is missing the required permissions.
