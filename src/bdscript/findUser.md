# $findUser
Finds a user's ID using username, ID, or mention.

## Usage
```
$findUser[user;(optional) returnAuthorID (yes/no)]
```

## Breakdown
- `user` - The user's username, ID, or mention to find.
- `returnAuthorID` - Whether to return the author ID if no user was found. Default is `yes`. Optional.

## Example
```
$nomention
$findUser[$message]
```

![example](https://user-images.githubusercontent.com/69215413/125977542-dbb250bd-d91d-4fdd-85d7-26b511a7efa8.png)
