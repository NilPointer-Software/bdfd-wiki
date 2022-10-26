# $unbanID
Unbans a user by using their ID.

> 📌 In order to unban a user from the guild, the bot must have `ban` permission.

## Usages
There are two usages of this function :

### Usage #1
#### Syntax
```
$unbanID
```
Unbans a user by using their ID. The ID is taken from the last argument of the author's message.

#### Example
```
$nomention
$unbanID
Successfully unbanned user!
```
![example](https://user-images.githubusercontent.com/69215413/126553929-c30e6bd8-63ab-4e2a-9dc5-0ec1f23d6221.png)

### Usage #2
#### Syntax
```
$unbanID[User ID]
```
Unbans a user by using the ID provided in the 'User ID' parameter.

##### Parameters
- `User ID` : The ID of the user to unban.

#### Example
```
$nomention
$unbanID[$message[1]]
Successfully unbanned user!
```
![example](https://user-images.githubusercontent.com/69215413/126553929-c30e6bd8-63ab-4e2a-9dc5-0ec1f23d6221.png)
