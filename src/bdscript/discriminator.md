# $discriminator
Returns a user's discriminator (the 4 digit number at the end of their username).

## Usages
There are two usages of the `$discriminator` function.

### Usage #1
```
$discriminator[userID]
```

#### Parameters
- `userID` `(Type : Snowflake || Flag : Emptiable)` : The user to get the discriminator from.

### Usage #2
```
$discriminator[]
```
Returns the author's discriminator.

## Example
```
$nomention
Hello $username#$discriminator[]!
```

![example](https://user-images.githubusercontent.com/69215413/123010488-b5911b00-d38c-11eb-8aeb-a7453c3687c6.png)
