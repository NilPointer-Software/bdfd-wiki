# $setVar
Sets the value to given variable. It's a global variable, it means that this variable can be accessed in every server by every user.

## Usage
```
$setVar[name;value;(user ID)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| variableName | The variable to update. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| newValue | The newly assigned variable value. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)
| userID | The user to be assigned a new value, if no `userID` is specified, is used each. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Optional](/src/resources/arguments/flags.md#optional)

> **Find more information about variables [here](/src/guides/variables.md).**

## Examples
### Changing the value of a variable (Each)
```
$setVar[Example;true]
```
**\*** This will change the value of the variable to true for each user.

![Attachment](https://cdn.discordapp.com/attachments/967164752390398003/967171630017159198/Screenshot_20220423-0014272.png)

### Changing the value of a variable (Command author)
```
$setVar[Example;true;$authorID]
```
**\*** This will change the value of the variable to true for the author of the command.

![Attchment](https://cdn.discordapp.com/attachments/967164752390398003/967172201625301122/Screenshot_20220423-0016352.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*
