# $changeUsernameWithID
Changes a user's nickname using their ID.

## Syntax
```
$changeUsernameWithID[User ID;New nickname]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The ID of the user whose nickname will be changed.
- `New nickname` `(Type: String || Flag: Required)`: The text to change the user's nickname to. It cannot exceed more than 32 characters, using `%username%` will be replaced by real user's username.

## Example
```
$nomention
Successfuly changed!
$changeUsernameWithID[$botID;$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example The best bot
```

```admonish question title="What is this?"
How [`$botID`](./botID.md) and [`$message`](./message.md) works?
```
