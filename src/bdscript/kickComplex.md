# $kick[]
Kicks the provided user with specified reason. 

## Syntax
```
$kick[User ID;(Reason)]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to kick from the server.
- `Reason` `(Type: String || Flag: Vacantable)`: The audit-log reason for the kick.

## Example
```
$nomention
$kick[$mentioned[1];$noMentionMessage]
✅ Kicked `$username[$mentioned[1]]#$discriminator[$mentioned[1]]`!
```

![example](https://user-images.githubusercontent.com/69215413/123518740-4742a600-d675-11eb-8581-1707b6989203.png)
