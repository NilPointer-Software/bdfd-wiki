# $serverNames
Retrieves names of servers your bot is in.

## Usages
There are two usages of this function.

### Usage #1
```
$serverNames
```
Returns up to 10 server names that the bot is in.

### Usage #2
```
$serverNames[amount;separator]
```
Returns server names. You can set `amount` to `-1` if you want to return all servers your bot is in. Be wary of message character limits, however.

## Example
```
$nomention
$onlyForIDs[YOUR_ID;Only my owner can use that!]
$serverNames[-1;, ]
```
> 🧙‍♂️ Replace 'YOUR_ID' with your [user ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID).
