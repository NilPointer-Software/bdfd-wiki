# $varExistError
Returns a custom error if a certain variable doesn't exist in the app.

## Syntax
```
$varExistError[Name;Error message]
```

### Parameters
- `Name` `(Type : String || Flag : Required)` : The variable that should exist.
- `Error message` `(Type : String || Flag : Emptiable)` : The custom error message to return if the variable doesn't exist.

## Example
```
$nomention
$varExistError[Cool;Add the 'Cool' variable in the app.]
$setUserVar[Cool;true]
You are now cool!
```
![example](https://user-images.githubusercontent.com/69215413/125121239-9a7b1680-e0c1-11eb-8ceb-b9b695f1b89f.png)
