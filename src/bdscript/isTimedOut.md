# $isTimedOut
Checks whether the specified user is timed out or not.

> 🧙‍♂️ "true" means the user is timed out, "false" means they aren't.

## Syntax
```
$isTimedOut[User ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to check.

## Example
```
$nomention
User is timed out: $isTimedOut[$mentioned[1]]
```
![example](https://user-images.githubusercontent.com/94063167/198900738-ed1059b6-0d73-4e97-8669-40c770281e51.png)
