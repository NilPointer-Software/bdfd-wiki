# $else
A block of code to be executed, if the `$if[]` condition is `false`.

## Syntax
```
$else
```

## Example
```
$nomention
$if[$authorID==$botOwnerID]
  $sendMessage[You are the developer of this bot!]
$else
  $sendMessage[You are not the developer of this bot!]
$endif
```
![example](https://github.com/Rainb0wKey/bdfd-wiki/assets/113303649/611aad1c-4f25-4212-ac80-a35a97ed9ecf)

> For more info, see the [If Guide](..guides/ifStatements.md).
