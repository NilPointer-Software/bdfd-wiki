# $setUserVar
Sets value to given variable. It's a user variable, it means that this variable is assigned to user that used this command.

## Usage
```
$setUserVar[variableName;newValue;(userID;guildID)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| variableName | The variable to update. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| newValue | The newly assigned variable value. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)
| userID | The user to assign the new value to, uses the author if no `userID` is provided. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Optional](/src/resources/arguments/flags.md#optional)
| guildID  | The server on which to change the value of the variable, uses the server where the command was executed if no `serverID` is provided. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Optional](/src/resources/arguments/flags.md#optional)

> **Find more information about variables [here](/src/guides/variables.md).**

## Examples
### Changing the value of a variable (Command author)
```
$setUserVar[Example;true]
```
**\*** This will change the value of the variable to true for the author of the command.

![Attachment](https://cdn.discordapp.com/attachments/967164752390398003/967173474554642482/Screenshot_20220423-0021412.png)

### Changing the value of a variable (Mentioned user)
```
$setUserVar[Example;true;$mentioned[1]]
```
**\*** This will change the value of the variable to true for the mentioned user.

![Attachment](https://cdn.discordapp.com/attachments/967164752390398003/967173937001812028/Screenshot_20220423-0023402.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*
