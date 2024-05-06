# $blackListIDs
Blocks certain users from using the command.

## Syntax
```
$blackListIDs[User IDs;...;Error message]
```

### Parameters
- `User IDs` `(Type: Snowflake || Flag: Emptiable)`: The user(s) to blacklist from using the command. Use semicolons `;` as a separator to separate multiple user IDs.
  > [How to get user ID?](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)
- `Error message` `(Type: String || Flag: Emptiable)`: The message that will be sent when the user running the command is blacklisted.

## Example
```
$nomention
$blackListIDs[566613317972394004;437154602626973697;❌ You can't use this command!]
Pong! $ping ms
```

```discord yaml
- user_id: 437154602626973697
  username: Kito
  color: "#4365ab"
  content: |
    !example
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
      ❌ You can't use this command!
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
      Pong! 1 ms
```
