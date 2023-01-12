# $changeUsername
Changes the mentioned user's nickname.

## Syntax
```
$changeUsername[new nickname]
```
## Parameters
- `new nickname`: The text to change the user's nickname to. 
> It cannot exceed more than 32 characters.

## Example
```
$nomention
$onlyPerms[managenicknames;Missing permission 'manage nicknames'!]
$argsCheck[>2;Wrong usage! Correct Usage: `!nickname (user) (text)`]
$changeUsername[$noMentionMessage]
Changed <@$mentioned[1]>'s nickname to `$noMentionMessage`.
```
![example](https://user-images.githubusercontent.com/69215413/120035233-406c3900-bfcc-11eb-8d1a-31d69da21622.png)
