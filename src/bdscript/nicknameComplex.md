# $nickname[]
Returns the nickname of the given user.

> 🧙‍♂️ Nickname means the user's server nickname. If the user doesn't have a nickname then their username is returned instead.

## Syntax
```
$nickname[User ID]
```

### Parameters 
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to get the nickname for.

## Example
```
$nomention
<@$mentioned[1;yes]>'s nickname is `$nickname[$mentioned[1;yes]]`
```

![example](https://user-images.githubusercontent.com/69215413/124502356-53271a00-dd91-11eb-8d72-778c9141f296.png)
