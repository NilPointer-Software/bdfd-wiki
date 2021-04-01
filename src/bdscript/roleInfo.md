# $roleInfo
`$roleInfo` allows you to make a 'role info' command without using a bunch of different functions at once. The command returns info about the mentioned role.

## Usage
You can use the 'commands' below within it:

`{name}` - Returns the role name

`{ID}` - Return the role's ID 

`{mentionable}` - Sees if the role is mentionable by everyone 

`{hoist}` - Gets if a role is hoisted (displayed separately) 

`{color}` - Gives the role's color hex 

`{position}` - Returns the roles position on 'roles list'


Usage: `$roleInfo[commands/text here]`



⚠️ You can not include `$roleInfo[]` in a command with a `$description[]` (because it makes one automatically).

## Example Code
```
$roleInfo[Name: {name}
ID: {ID}
Mentionable?: {mentionable}
Hoisted?: {hoist}
Color: {color}
Position: {position}]
$title[Role Info]
```

### Expected Output
```
Role Info
Name: RoleName
ID: RoleID
Mentionable?: true/false
Hoisted?: true/false
Color: hex-code
Position: position-number
```
