# $roleInfo
`$roleInfo` allows you to make a 'role info' command without using a bunch of different functions at once. This function returns info about the mentioned role.

## Usage
```
$roleInfo[message]
```

### Parameters 
- `message` `(Type: String || Flag: Required)` : The message format. Check below for more information.

## Commands
You can use the 'commands' below within `$roleInfo`:

- `{name}` - Returns the role name.
- `{ID}` - Returns the role's ID.
- `{mentionable}` - Returns if the role is mentionable by everyone.
- `{hoist}` - Returns if a role is hoisted (displayed separately).
- `{color}` - Returns the role's color.
- `{position}` - Returns the roles position on 'roles list'.

⚠️ You can not include `$roleInfo[]` in a command with a `$description[]` (because it makes one automatically).

## Example
```
$nomention
$roleInfo[Name: {name}
ID: {ID}
Mentionable?: {mentionable}
Hoisted?: {hoist}
Color: {color}
Position: {position}]
$title[Role Info]
```

![example](https://user-images.githubusercontent.com/69215413/122831224-8f4d7b80-d2b7-11eb-838a-fc2ba7cd7476.png)
