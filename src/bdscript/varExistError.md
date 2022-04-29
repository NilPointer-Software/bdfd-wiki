# $varExistError
Returns custom error if variable does not exist.

## Usage
```
$varExistError[variableName;errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| variableName | The variable that should exist. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| errorMessage | The custom error message to return if the variable doesn't exist. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

## Example
```
$nomention
$varExistError[Cool;Add the 'Cool' variable in the app.]
$setUserVar[Cool;true;$authorID]
You are now cool!
```

![example](https://user-images.githubusercontent.com/69215413/125121239-9a7b1680-e0c1-11eb-8ceb-b9b695f1b89f.png)

## Tip
Useful for publishing your commands in #wikis on the official BDFD server. This way you can explain in more detail to the user that he forgot to create the required variable.
