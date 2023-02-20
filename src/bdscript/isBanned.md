# $isBanned

Returns 'true' if user is banned, otherwise it returns 'false'. Requires 'BAN_MEMBERS' permission

## Usage
```
$isBanned[user ID]
```

## Parameters 
- `user ID ` `(Type: Snowflake || Flag: Required)`: The user to check its ban status.

## Example
```
$nomention
$isBanned[$mentioned[1]]
```
