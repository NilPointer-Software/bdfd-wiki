# $ban
Bans the mentioned user.

> **Warning:** Both the bot and user running the command must have the 'ban' permission. The bot cannot ban the server owner or users with higher roles than it. 'ban' is an elevated permission, so 2FA may be required for the bot owner [(click here for more info)](src/resources/2FA.md).

## Usage
```
$ban[(optional) reason]
```

### Breakdown
- `reason` - The reason for this ban, which will be sent to the server's audit log.

## Examples
#### Example #1
*(without optional fields)*
```
$nomention
$ban
<@$mentioned[1]> was banned!
```
![example1](https://user-images.githubusercontent.com/69215413/119858159-32da8480-bee2-11eb-922d-0fb05a5aa7c9.png)

#### Example #2
*(with optional fields)*
```
$nomention
$ban[$noMentionMessage]
<@$mentioned[1]> was banned!
```
![example2](https://user-images.githubusercontent.com/69215413/119860514-661e1300-bee4-11eb-965e-e3c7fa78b5ca.png)