# $onlyIf
If *value1* is related accordingly (based on the "sign") with *value2* then the code runs. If not, the provided error message is returned.

## Syntax
```
$onlyIf[Condition;Error message]
```

### Parameters
- `Condition` `(Type: String || Flag: Required)`: The condition to check (e.g. value1!=value2).
- `Error message` `(Type: String || Flag: Emptiable)`: The message to return when the condition isn't true.

### Signs
- `==` - Equal
- `!=` - Not Equal
- `<` - Less Than
- `>`- Greater Than
- `>=` - Greater Than Or Equal To
- `<=` - Less Than Or Equal To
