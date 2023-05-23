# $getVar
Gets the value of a global/global-user variable.

## Syntax
```
$getVar[Variable name;(User ID)]
```

> 🧙‍♂️ For a global variable, a `User ID` doesn't need to be provided. For a global-user variable, `User ID` must be provided.

### Parameters
- `Variable name` `(Type: String || Flag: Required)`: The name of the variable to get the value from.
- `User ID` `(Type: Snowflake, String || Flag: Vacantable)`: The user to get the value for (if global-user).

## Example
```
$nomention
You have $getVar[Money;$mentioned[1;yes]] coins!
```

![example](https://user-images.githubusercontent.com/69215413/126073974-8fbd707f-aaeb-4500-9db2-7ac923b3df74.png)

> For more info, see the [Variables Guide](../guides/introduction/variables.md).
