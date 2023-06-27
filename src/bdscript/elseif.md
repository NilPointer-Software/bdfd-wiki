# $elseif
A new condition to check, if the first condition is false.

> Only for BDScript 2

## Syntax
```
$elseif[Condition]
```

### Parameters
- `Condition` `(Type: String || Flag: Required)`: Check that will be carried out.

### Signs
`==` - Equal

`!=` - Not Equal

`<` -  Less Than

`>` - Greater Than

`>=` - Greater Than Or Equal To

`<=` - Less Than Or Equal To


## Example
```
$nomention
$if[$authorID==$botOwnerID]
Developer
$elseif[$authorID==$serverOwner]
Server Owner
$endif
```
