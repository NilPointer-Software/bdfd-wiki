# $onlyForChannels
The command can only be executed in the provided channels.

## Syntax
```
$onlyForChannels[Channel IDs;...;Error message]
```

### Parameters 
- `Channel IDs` `(Type: Snowflake || Flag: Emptiable)`: The channels that the command can be executed in. Use semicolons `;` as a separator to separate multiple channel IDs.
- `Error message` `(Type: String || Flag: Emptiable)`: The message that is returned when the command is used in a non-whitelisted channel.

## Example
```
$nomention
$onlyForChannels[1050809741137412177;816767374610923601;❌ This command can't be executed in this channel!]

$c[Put your code here.]
```
