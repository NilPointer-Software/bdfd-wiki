# $onlyAdmin
Makes the command only for users with the *administrator* permission executable.

## Syntax
```
$onlyAdmin[Error message]
```

### Parameters 
- `Error message` `(Type: String || Flag: Emptiable)`: The error message that is returned when the user isn't an administrator.

## Example
```
$nomention
$onlyAdmin[❌ Only administrators can use this command!]

$c[Put your code here.]
```
