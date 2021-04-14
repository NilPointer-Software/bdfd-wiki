# $username
Returns a user's username.

## Usages
• There are 2 usages for the `$username[]` command.

### Usage #1
`$username` - Returns the username of the user running the command.

#### Example #1
*(for this example a echo command)*
```
$nomention
Hello $username!
```
![image](https://user-images.githubusercontent.com/69215413/114783581-fc88e180-9d47-11eb-91a6-02e60b20fcf4.png)


### Usage #2
`$username[userID]` - Returns the username of the user with the userID that is provided.

#### Example #2
*(for this example a hug command)*
```
$nomention
$username just hugged $username[$mentioned[1]]!
```
![image](https://user-images.githubusercontent.com/69215413/114783383-f430a680-9d47-11eb-91e5-6ade1c6ef234.png)
