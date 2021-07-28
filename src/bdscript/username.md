# $username
Returns a user's username.

## Usages
There are two usages of the `$username` function.

### Usage #1
`$username` - Returns the username of the user running this command.


### Usage #2
`$username[userID]` - Returns username of the user with the 'userID' that is provided.

## Examples
### Example #1
*(for this example a echo command)*
```
$nomention
Hello $username!
```
![example1](https://user-images.githubusercontent.com/69215413/114783581-fc88e180-9d47-11eb-91a6-02e60b20fcf4.png)

### Example #2
*(for this example a hug command)*
```
$nomention
$username just hugged $username[$mentioned[1]]!
```
![example2](https://user-images.githubusercontent.com/69215413/114783383-f430a680-9d47-11eb-91e5-6ade1c6ef234.png)
