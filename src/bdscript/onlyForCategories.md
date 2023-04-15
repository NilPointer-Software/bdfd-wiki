# $onlyForCategories
The command can only be executed in the provided categories.

## Syntax
```
$onlyForCategories[Category IDs;...;Error message]
```

### Parameters 
- `Category IDs` `(Type: Snowflake || Flag: Emptiable)`: The categories where the command can be executed in. Use semicolons `;` as a separator to separate multiple category IDs.
- `Error message` `(Type: String || Flag: Emptiable)`: The message that is returned when the command is executed in non-whitelisted categories.

## Example
```
$nomention
$onlyForCategories[790620501927526462;❌ This command can't be executed in this category!]

$c[Put your code here.]
```
