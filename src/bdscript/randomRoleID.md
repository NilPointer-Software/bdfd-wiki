# $randomRoleID
Returns random role id from the current server or the provided server.

## Syntax
```
$randomRoleID[(guild ID)]
```
### Parameters
- `guild ID` `(Type: Snowflake || Flag: Optional)`: The server to get a random role id.
> Use `$randomRoleID[]` to get the current guild id.

## Example
```
$nomention
Random Role: $roleName[$randomRoleID[]]
```
![example](https://user-images.githubusercontent.com/113303649/212498465-46ec2a48-0890-41a0-a57a-283a183d1144.png)

> It can return the `@everyone` role ID!
> 
> ![example](https://user-images.githubusercontent.com/113303649/212498371-1792ea9b-55f7-494c-8e09-24a20192e8cb.png)
