# $onlyForCategories
The command can only be executed in provided categories.

# Usage
```
$onlyForCategories[category IDs;error message]
```

# Parameters 
- `category IDs` `(Type: Snowflake || Flag: Emptiable)`: The categories where the command can be executed in. Separate the categories using `;`.
- `error message` `(Type: String || Flag: Emptiable)`: The message that is returned when the command is executed in non-whitelisted categories.
