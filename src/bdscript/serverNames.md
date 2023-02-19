# $serverNames
Returns server names that the bot is in.

## Usages
There are 2 usages of `$serverNames`:

### Usage #1
#### Syntax
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
#### Syntax
```
$serverNames[amount;separator]
```
Returns *x* server names that the bot is in.

#### Parameters
- `amount` `(Type: Integer || Flag: Required)`: The *x* amount of server names you want. Use `-1` if you want to return all server names.
- `separator` `(Type: String || Flag: Emptiable)`: A custom separator for separating server names.

#### Example
```
$nomention
$serverNames[5;
]
```
