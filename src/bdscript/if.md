# $if
Executes the following block of code if the provided condition is true.

## Syntax
```
$if[Condition]
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
  $sendMessage[You are the developer of this bot!]
$endif
```
![example](https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e6c2da63-b36f-4dde-8436-6ce9e7e41385)

> For more info, see the [If Guide](..guides/ifStatements.md)
