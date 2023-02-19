# $roleGrant

Gives or removes roles from the provided user.

## Usage
```
$roleGrant[user ID;+/-Role ID;...]
```

### Parameters
- `user ID` `(Type: Snowflake || Flag: Required)`: The user to grant roles to.
- `RoleID` `(Type: Snowflake || Flag: Required)`: The role to give or remove. Prepend `+` or `-` to the role ID to give or remove it.

## Example 1
```
$nomention
$roleGrant[3869969062509936;+9368562753613496]
```

## Example 2
```
$nomention
$roleGrant[$mentioned[1];+$mentionedRoles[1]]
<@$mentioned[1]> user was given <@&$mentionedRoles[1]> role
```
![image](https://user-images.githubusercontent.com/42785890/153126389-d8c9bf0d-4fee-49ce-8e16-7dd39987a368.png)
