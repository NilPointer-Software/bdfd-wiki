# $serverNames
Returns server names that the bot is in.

## Usages
There are 2 usages of `$serverNames` :

### Usage #1
```
$serverNames
```
Returns 10 servers names that the bot is in

#### Example
```
$nomention
$onlyForIDs[YOUR_ID;Only my owner can use that!]
$serverNames
```
> 🧙‍♂️ Replace 'YOUR_ID' with your [user ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID).

### Usage #2
```
$serverNames[amount;separator]
```
Returns *x* server names that the bot is in.

#### Breakdown
- `amount` - The *x* amount of server names you want. Use `-1` if you want to return all server names.
- `separator` - A custom separator for separating server names.

#### Example
```
$nomention
$serverNames[5;
]
```
