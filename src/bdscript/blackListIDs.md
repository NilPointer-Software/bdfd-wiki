# $blackListIDs
Blocks certain users from using the command.

## Usage
```
$blackListIDs[userIDs;errorMessage]
```

### Breakdown
- `userIDs` - The users to blacklist from using the command. Separate userIDs with `;`.
> 🧙‍♂️ [Please provide real userID(s). Click-me for more info!](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)
- `errorMessage` - The message that appears when the user running the command is blacklisted.

## Example
```
$nomention
$blackListIDs[566613317972394004;246604909451935745;❌ You can't use this command!]
Pong! $ping ms
```
