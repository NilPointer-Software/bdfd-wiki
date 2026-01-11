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
$kick[$mentioned[1];Bad guy]
✅ Kicked!
```

```admonish question title="What is this?"
How [`$mentioned[]`](./mentioned.md) works?
```