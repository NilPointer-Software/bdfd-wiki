# $username
Returns a user's username.

## Usages
There are two usages of this function :

### Usage #1
#### Syntax
```
$username
```
Returns the username of the user who triggered the command.

#### Example
```
$nomention
Hello $username!
```
![example1](https://user-images.githubusercontent.com/69215413/114783581-fc88e180-9d47-11eb-91a6-02e60b20fcf4.png)

### Usage #2
#### Syntax
```
$username[User ID]
```
Returns username of a specific user using it's ID.

##### Parameters
- `User ID` : The ID of the user whose username is to get.

#### Examples
```
$nomention
$username just hugged $username[$mentioned[1]]!
```
![example2](https://user-images.githubusercontent.com/69215413/114783383-f430a680-9d47-11eb-91e5-6ade1c6ef234.png)
