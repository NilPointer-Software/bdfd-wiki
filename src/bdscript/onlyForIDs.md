# $onlyForIDs
The command can only be executed by the provided users.

## Usage
```
$onlyForIDs[userIDs;...;errorMessage]
```

### Parameters 
- `userIDs` `(Type : Snowflake || Flag : Emptiable)` : The users that can use this command, separate IDs using `;`.
- `errorMessage` `(Type : String || Flag : Emptiable)` : The error message that is returned, when the user running the command is not whitelisted.

## Example
```
$onlyForIDs[YOUR_ID;❌ You are not my owner!]
$eval[$message]
$c[This can only be executed in BDScript 2.]
```
