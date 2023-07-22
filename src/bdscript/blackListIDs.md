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
![example](https://user-images.githubusercontent.com/113303649/210045834-d83964d7-6d5f-4cba-b549-2373c1336e49.png)
