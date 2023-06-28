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
  $sendMessage[Developer]
$elseif[$authorID==$serverOwner]
  $sendMessage[Server Owner]
$endif
```

![example](https://github.com/Rainb0wKey/bdfd-wiki/assets/113303649/a929d2ac-fcbe-4879-a70c-8e0433aa8177)
> For more info, see the [If Guide](..guides/ifStatements.md)
