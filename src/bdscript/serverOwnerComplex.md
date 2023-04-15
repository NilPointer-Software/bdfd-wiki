# $serverOwner[]
Returns the ID of the provided server's owner.

## Syntax
```
$serverOwner[Guild ID]
```

### Parameters 
- `Guild ID` `(Type: Snowflake || Flag: Required)`: The server to get the owner ID for.

> 🧙‍♂️ The bot must be present in the server in order to get the server owner ID.

## Example
```
$nomention
This server is owned by <@$serverOwner[$guildID]>!
```
![example](https://user-images.githubusercontent.com/69215413/126378613-0ba28781-b199-4d8c-8117-cd050031ba09.png)
