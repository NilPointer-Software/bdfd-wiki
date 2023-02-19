# $serverOwner
Returns the ID of the server owner.

## Usages
There are two usages of the `$serverOwner` function.

### Usage #1
#### Syntax
```
$serverOwner
```
Returns the current server's owner.

### Usage #2
#### Syntax
```
$serverOwner[serverID]
```
Returns the owner ID of the provided server.

#### Parameters 
- `serverID` `(Type: Snowflake || Flag: Required)`: The server to get the owner ID for.

> 🧙‍♂️ Bot must be present in the server to get the server owner ID.

## Example
```
$nomention
This server is owned by <@$serverOwner>!
```

![example](https://user-images.githubusercontent.com/69215413/126378613-0ba28781-b199-4d8c-8117-cd050031ba09.png)
