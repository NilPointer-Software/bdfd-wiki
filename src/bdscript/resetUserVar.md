# $resetUserVar
Resets a user variable back to its default value *(the one inputted in the app)* **for every user, or just the provided user**.

> 🧙‍♂️ Use this function wisely!

## Syntax
```
$resetUserVar[Variable name;(User ID)]
```

### Parameters
- `Variable name` `(Type: String || Flag: Required)`: The name of the variable to reset.
- `User ID` `(Type: Snowflake || Flag: Optional)`: The user to reset the variable for. If no user is provided, the variable will be reset for **everyone**.
