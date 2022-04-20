# $getVar
Gets a global/global-user variable.

## Usage
```
$getVar[variableName;(userID)]
```
> ⚠️ **Warning:** For a global variable, a `userID` doesn't need to be provided. For a global-user variable, `userID` must be provided. [(learn more)](/src/guides/variables.md#globalglobal-user-variables)

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| variableName | The name of the variable to get the value from. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| userID | The user to get the value for (global-user variables). | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Optional](/src/resources/arguments/flags.md#optional)

> **Find more information about variables [here](/src/guides/variables.md).**

## Example
```
$nomention
<@$mentioned[1;yes]> has $getVar[Money;$mentioned[1;yes]] coins.
```
![](https://user-images.githubusercontent.com/69215413/147831890-72e0f0da-626b-47db-916c-af7d97d37c5e.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*