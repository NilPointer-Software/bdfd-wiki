# $elseif
Checks provided condition only if previous `$if[]` or `$elseif[]` conditions returned false.
If the provided condition is true, the following block of code will be executed.

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
- These signs could vary in meaning based on the order or intent of the if statement.
- If you are using text as your `x` and/or `y`, you can not use any other signs besides `==` and `!=`. However for numbers, you can use any sign shown in the above list.

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
