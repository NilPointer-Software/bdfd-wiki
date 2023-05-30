# $isBot
Returns whether the provided user is a bot or not.

> 🧙‍♂️ 'true' means the user is a bot, 'false' means the user is not a bot.

## Syntax
```
$isBot[User ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Emptiable)`: The user to check.

## Example
```
$nomention
Bot? $isBot[$findUser[$message]]
```

![image](https://user-images.githubusercontent.com/69215413/126853528-3af140c4-0c73-4091-bb6f-d1f6e3567bf5.png)
