# $modifyRole
Modifies an existing role.

## Syntax
```
$modifyRole[Role ID;(Role name;Color hex;Hoisted?;Mentionable?)]
```

```admonish tip
You can use `!unchanged` as an argument to leave the setting as-is.
```

### Parameters 
- `Role ID` `(Type: Snowflake || Flag: Required)`: The ID of the role to modify.
- `Role name` `(Type: String || Flag: Optional)`: The new role name.
- `Color hex` `(Type: Color || Flag: Optional)`: The new role color hex. You can also use color integer number.

- `Hoisted?` `(Type: Bool || Flag: Optional)`: Whether the role should be displayed separately or not.
- `Mentionable?` `(Type: Bool || Flag: Optional)`: Whether the role should be mentionable by everyone or not.

### Permissions
Required permissions that the bot must have for this function to work properly:
- `manageroles`

## Example
```
$nomention
$modifyRole[$findRole[$message[1]];$replaceText[$message;$message[1];;1];!unchanged;!unchanged;!unchanged]
$description[✅ Changed role name of <@&$findRole[$message[1]]>]
```

![example](https://user-images.githubusercontent.com/69215413/123530371-771a9980-d6c7-11eb-987d-c4ba3bb40bd1.png)

