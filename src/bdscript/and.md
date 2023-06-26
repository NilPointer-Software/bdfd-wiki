# $and
Returns `true` if every provided condition is true, otherwise `false` is returned.

## Syntax
```
$and[conditions;...]
```

### Parameters
- `conditions` `(Type: String || Flag: Required)`: Checks that will be carried out. All conditions must be true for this function to return `true`. Separate conditions using `;`.

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
`$and[$nickname==MineBartekSA;$message==Update]`
```

![example](https://github.com/Rainb0wKey/bdfd-wiki/assets/113303649/d277f043-6acd-418c-8695-ced1f2061c20)

> For more info, see the [If Guide](..guides/ifStatements.md)
