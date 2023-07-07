# $and
Returns `true` if every provided condition is true, otherwise `false` is returned.

## Syntax
```
$and[Conditions;...]
```

### Parameters
- `Conditions` `(Type: String || Flag: Required)`: Checks that will be carried out. All conditions must be true for this function to return `true`. Separate conditions using `;`.

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
$and[$nickname==MineBartekSA;$message==Update]
```

![example](https://github.com/Rainb0wKey/bdfd-wiki/assets/113303649/d277f043-6acd-418c-8695-ced1f2061c20)

> For more info, see the [If Guide](../guides/ifStatements.md).
