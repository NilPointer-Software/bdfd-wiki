# $hasRole
Returns whether or not a user has the provided role.

> 🧙‍♂️ "true" means the user has the role, "false" means they don't.

## Syntax
```
$hasRole[User ID;Role ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to check for the role.
- `Role ID` `(Type: Snowflake || Flag: Emptiable)`: The role that the bot is checking the user for.

## Example
```
$nomention
$hasRole[$authorID;858376972303204362]
```
![example](https://user-images.githubusercontent.com/69215413/126073798-d4178684-6181-4130-9d9e-12a91010b80c.png)
