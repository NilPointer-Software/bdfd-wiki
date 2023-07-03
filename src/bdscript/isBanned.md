# $isBanned
Returns whether a user is banned from the current server or not. Requires the `BAN_MEMBERS` permission.

> 🧙‍♂️ "true" means the user is banned, "false" means they aren't.

## Syntax
```
$isBanned[User ID]
```

### Parameters 
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to check its ban status.

## Example
```
$nomention
$isBanned[$message[1]]
```
![example](https://user-images.githubusercontent.com/111157596/233709040-50d9987e-094d-4ddb-b85e-d01db865c840.png)
