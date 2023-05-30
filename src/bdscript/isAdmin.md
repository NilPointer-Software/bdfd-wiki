# $isAdmin
Returns whether the provided user has the administrator permission or not.

> 🧙‍♂️ 'true' means the user has the administrator permission, 'false' means they don't.

## Syntax
```
$isAdmin[User ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to check.

## Example
```
$nomention
Are you an admin?: `$isAdmin[$authorID]`
```
![example](https://user-images.githubusercontent.com/111157596/233708093-852277ce-50b7-4fd6-a7b1-01d55931d9d2.png)
