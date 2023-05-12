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
- `>` - Greater Than
- `<=` - Less Than Or Equal To
- `>=` - Greater Than Or Equal To

> ⚠️ The signs `<`, `>`, `<=` and `>=` only work with numbers.

## Examples
#### Equal (`==`)
```
$nomention
$onlyIf[$message[1]==BDFD;❌ The first argument of your message must be "BDFD"!]
```

#### Not Equal (`!=`)
```
$nomention
$onlyIf[$message[1]!=BDFD;❌ The first argument of your message can't be "BDFD"!]
```

#### Less Than (`<`)
```
$nomention
$onlyIf[$message[1]<3000;❌ The number must be less than 3000!]
```

#### Greater Than (`>`)
```
$nomention
$onlyIf[$message[1]>3000;❌ The number must be greater than 3000!]
```

#### Less Than Or Equal To (`<=`)
```
$nomention
$onlyIf[$message[1]<=50000;❌ The number must be less than or qual to 50000!]
```

#### Greater Than Or Equal To (`>=`)
```
$nomention
$onlyIf[$message[1]>=50000;❌ The number must be greater than or qual to 50000!]
```
