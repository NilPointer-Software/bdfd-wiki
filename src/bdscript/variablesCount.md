# $variablesCount
Returns how many of a certain variable type the bot has.

## Syntax
```
$variablesCount[Type]
```

### Parameters
- `Type` `(Type : Enum || Flag : Required)` : The variable type to return the count for. Accepts either `user`, `server`, `channel`, or `globaluser` as input.

## Example
```
$nomention
$variablesCount[server]
```
![example](https://user-images.githubusercontent.com/69215413/125121829-82f05d80-e0c2-11eb-9a78-4b7ea7e3d224.png)
