# $roleInfo
Returns information about the mentioned role. `$roleInfo` allows you to create a role info command without using a bunch of different functions at once.

## Syntax
```
$roleInfo[Message]
```

### Parameters 
- `Message` `(Type: String || Flag: Required)`: The message format. Check below for more information.

### Message format
You can use the following "commands" within `$roleInfo[]`:

- `{name}` - Returns the role's name.
- `{ID}` - Returns the role's ID.
- `{mentionable}` - Returns if the role is mentionable by everyone.
- `{hoist}` - Returns if the role is hoisted (displayed separately).
- `{color}` - Returns the role's color.
- `{position}` - Returns the role's position on the "roles list".

> 🧙‍♂️ `$roleInfo[]` automatically generates a description. So, `$description[]` should not be used in the code.

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
