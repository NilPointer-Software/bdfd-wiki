# $blackListIDs
Blocks certain users from using the command.

## Syntax
```
$blackListIDs[user IDs;...;error message]
```

## Parameters
- `user IDs` - The users to blacklist from using the command. Separate userIDs with `;`.
> [How to get user ID?](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)
- `error message` - The message that appears when the user running the command is blacklisted.

## Example
```
$nomention
$blackListIDs[566613317972394004;437154602626973697;❌ You can't use this command!]
Pong! $ping ms
```

![example](https://user-images.githubusercontent.com/113303649/210045834-d83964d7-6d5f-4cba-b549-2373c1336e49.png)
