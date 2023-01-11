# $onlyIf
If *value1* is related accordingly (based on the "sign") with *value2* then the code runs. If not, the 'errorMessage' is returned.

## Usage
```
$onlyIf[condition;errorMessage]
```

### Parameters
- `condition` `(Type : String || Flag : Required)` : value1!=value2 or value1>value2 or value1<value2.
- `errorMessage` `(Type : String || Flag : Emptiable)`

### Signs
- `==` - Equal
- `!=` - Not Equal
- `<` - Less Than
- `>`- Greater Than
- `>=` - Greater Than Or Equal To
- `<=` - Less Than Or Equal To
