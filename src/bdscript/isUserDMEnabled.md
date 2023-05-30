# $isUserDMEnabled
Checks whether the bot can DM the user or not.

> 🧙‍♂️ "true" means the bot can DM the user, "false" means it can't.

## Syntax
```
$isUserDMEnabled[User ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to check.

## Example
```
$nomention
$onlyIf[$isUserDMEnabled[$authorID]==true;❌ Failed to DM you. Make sure you have your DMs on!]
$dm
$message
```

![example](https://user-images.githubusercontent.com/69215413/123518295-46a91000-d673-11eb-9a1e-39f9d9f83bb9.png)
