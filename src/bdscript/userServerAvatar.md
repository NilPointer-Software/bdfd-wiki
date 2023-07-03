# $userServerAvatar
Returns the URL for the server avatar of a given user.

## Syntax
```
$userServerAvatar[User ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user from whom to get the server avatar. If the user doesn't have a server avatar, then the default user avatar will be returned instead.

## Example
```
$nomention
$image[$userServerAvatar[$authorID]?size=4096]
```
![example](https://user-images.githubusercontent.com/95774950/187596435-e7d3308a-8723-4750-bb3b-df9325f99637.png)
