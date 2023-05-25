# $guildExists
Checks if the provided guild/server exists.

> Returns `true` if the server exists. Returns `false` if the server doesn't exist or the bot isn't present in the provided server.

## Syntax
```
$guildExists[Guild ID]
```

### Parameters
- `Guild ID` `(Type: Snowflake, String || Flag: Emptiable)`: The ID of the hypothetical server.

## Example
```
$nomention
$guildExists[$message[1]]
```
![example](https://user-images.githubusercontent.com/111157596/233702796-bdb3f9c5-1b3b-4cc1-b0cc-b85811675139.png)
