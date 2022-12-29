# $and
Returns `true` if every provided condition is true, otherwise `false` is returned.

## Syntax
```
$and[conditions;...]
```
## Parameters
- `conditions`: Checks that will be carried out. All conditions must be true for this function to return `true`. Separate conditions using `;`.

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
$if[$and[$username==noituri;$message==Update]==true]
Noit said "Update"!
$endif
$c[The code in the if statement only executes if the user's username is 'noituri', and the message content is 'Update'.]
```

![example](https://user-images.githubusercontent.com/113303649/209949010-d4131044-5d6e-4afd-839d-b28ed9ecaab7.png)

> For more info, see the [If Guide](..guides/ifStatements.md)
