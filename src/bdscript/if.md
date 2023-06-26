# $if
Returns `true` if provided condition is true, otherwise `false` is returned.

## Syntax
```
$if[сondition]
```

### Parameters
- `сondition` `(Type: String || Flag: Required)`: Check that will be carried out.

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
  You are the developer of this bot!
$endif
```
![example](https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e6c2da63-b36f-4dde-8436-6ce9e7e41385)

> For more info, see the [If Guide](..guides/ifStatements.md)
