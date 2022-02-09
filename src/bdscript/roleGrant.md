# $roleGrant

Gives or removes roles from the provided user.

## Usage
```
$roleGrant[user ID;+/-Role ID;...]
```

### Breakdown
- `user ID` - the user ID.
- `+/-` - In front of RoleID use '+' to add the role or '-' to remove it.
- `RoleID` - ID of the role to give or remove.

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
![image](https://user-images.githubusercontent.com/42785890/153123355-70d242f2-b7cd-4f07-8844-225726ea97bf.png)
