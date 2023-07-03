# $roleGrant
Adds or removes roles from the provided user.

## Syntax
```
$roleGrant[User ID;+/-Role ID;...]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to grant roles to.
- `Role ID` `(Type: Snowflake || Flag: Required)`: The role to add or remove. Prepend `+` (to add it) or `-` (to remove it) to the role ID. Use semicolons `;` as a separator to separate multiple role IDs.

## Examples
### Example #1
```
$nomention
$roleGrant[3869969062509936;-9368562753613496]
```

### Example #2
```
$nomention
$roleGrant[$mentioned[1];+$mentionedRoles[1]]
<@$mentioned[1]> user was given <@&$mentionedRoles[1]> role
```
![example2](https://user-images.githubusercontent.com/42785890/153126389-d8c9bf0d-4fee-49ce-8e16-7dd39987a368.png)
