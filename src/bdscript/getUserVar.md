# $getUserVar
Returns a local-user variable value.

## Syntax
```
$getUserVar[Variable name;(User ID;Guild ID)]
```
### Parameters
- `Variable name` `(Type: String || Flag: Required)`: The name of the variable to get.
- `User ID` `(Type: String, Snowflake || Flag: Vacantable)`: The user to get the variable value for. If no user is provided, the author is used.
- `Guild ID` `(Type: Snowflake || Flag: Optional)`: The guild to get the variable value for. If no guild is provided, the current guild is used.

## Example
```
$nomention
<@$mentioned[1;yes]> has $getUserVar[Money;$mentioned[1;yes]] coins.
```

![example](https://user-images.githubusercontent.com/69215413/123357288-40157e00-d537-11eb-84bc-71f81764434f.png)

> For more info, see the [Variables Guide](../guides/introduction/variables.md).
