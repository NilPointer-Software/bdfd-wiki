# $setServerVar
Sets value to given variable. It's a server variable, it means that this variable is assigned to server.

## Usage
```
$setServerVar[name;value;(server ID)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| variableName | The variable to update. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| newValue | The newly assigned variable value. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)
| guildID  | The server on which to change the value of the variable, uses the server where the command was executed if no `serverID` is provided. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Optional](/src/resources/arguments/flags.md#optional)

> **Find more information about variables [here](/src/guides/variables.md).**

## Examples
### Changing the value of a variable
```
$setUserVar[Example;true]
```
**\*** This will change the value of the variable to true for the server where the command was executed.

![Attachment](https://cdn.discordapp.com/attachments/967164752390398003/967164781951873074/Screenshot_20220422-2347012.png)

### Changing the value of a variable (Specific server)
```
$setUserVar[Example;true;$message[1]]
```
**\*** This will change the value of the variable to true for the specified server. During the execution of the command you must specify the server's ID.

![Attachment](https://cdn.discordapp.com/attachments/967164752390398003/967165991077421146/Screenshot_20220422-2351582.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*
