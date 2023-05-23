# $findUser
Finds a user's ID using username, ID, or mention.

> 📝 This function can only find users of the current server.

## Syntax
```
$findUser[User;(Return author ID?)]
```

### Parameters
- `User` `(Type: String || Flag: Emptiable)`: The user's username, ID, or mention to find.
- `Return author ID?` `(Type: Bool || Flag: Optional)`: Whether to return the author ID if no user was found. The default is `yes`.

## Example
```
$nomention
$findUser[$message]
```

![example](https://user-images.githubusercontent.com/69215413/125977542-dbb250bd-d91d-4fdd-85d7-26b511a7efa8.png)
