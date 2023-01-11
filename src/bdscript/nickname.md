# $nickname
Returns a user's display name.
>🧙‍♂️ 'display name' means the user's server nickname, but if the user doesn't have a nickname then their username is returned instead.

## Usages
There are two usages of the `$nickname` function.

### Usage #1
```
$nickname
```
Returns the author's display name.

### Usage #2
```
$nickname[userID]
```

#### Parameters 
- `userID` `(Type : Snowflake || Flag : Required)` : Returns the provided user's display name.

## Example
```
$nomention
<@$mentioned[1;yes]>'s nickname is `$nickname[$mentioned[1;yes]]`
```

![example](https://user-images.githubusercontent.com/69215413/124502356-53271a00-dd91-11eb-8d72-778c9141f296.png)
