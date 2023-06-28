# $endif
End a if statement.

## Syntax
```
$endif
```

## Example
```
$nomention
$if[$message==BDFD]
  $sendMessage[I love BDFD!]
$endif
```
- With `$endif`:

![example](https://github.com/Rainb0wKey/bdfd-wiki/assets/113303649/40bc25ff-7bd1-43f4-8c70-0fd52ad8dc02)
- Without `$endif`:
  
![example](https://github.com/Rainb0wKey/bdfd-wiki/assets/113303649/468b635e-7879-4adc-a2c6-5b8ca641092d)
> For more info, see the [If Guide](..guides/ifStatements.md)
