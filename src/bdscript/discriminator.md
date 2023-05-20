# $discriminator
Returns a user's discriminator (the 4 digit number at the end of their username).

## Syntax
```
$discriminator[User ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Emptiable)`: The user to get the discriminator from.

> 🧙‍♂️ You can leave the `User ID` argument empty to get the discriminator of the author of the message. See [Example 1](#example-1) below.

## Examples
### Example #1
```
$nomention
Hello $username#$discriminator[]!
```
![example1](https://user-images.githubusercontent.com/69215413/123010488-b5911b00-d38c-11eb-8aeb-a7453c3687c6.png)

### Example #2
```
$nomention
Hello, I'm **$username[$botID]#$discriminator[$botID]**!
```
![example2](https://user-images.githubusercontent.com/111157596/232813565-f300e328-35db-4c5b-b98d-839e5db4f428.png)
