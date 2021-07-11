# $varExistError
Returns a custom error if a certain variable doesn't exist.

## Usage
```
$varExistError[variableName;errorMessage]
```
> 🧙‍♂️ This function is useful when posting codes in the *#wikis* channel, so users don't forget to create the needed variables.

### Breakdown
`variableName` - The variable that should exist.

`errorMessage` - The custom error-message to return if the variable doesn't exist.

## Example
```
$nomention
$varExistError[Cool;Add the 'Cool' variable in the app.]
$setUserVar[Cool;true;$authorID]
You are now cool!
```

![example](https://user-images.githubusercontent.com/69215413/125121239-9a7b1680-e0c1-11eb-8ceb-b9b695f1b89f.png)
