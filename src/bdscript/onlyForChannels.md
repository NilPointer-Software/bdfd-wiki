# $onlyForChannels
The command can only be executed in the provided channels, if the command is executed in a channel that is not provided, then the error message is returned.

## Usage
```php
$onlyForChannels[channelID;...;errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| channelID | The allowed channel(s). | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| errorMessage | Message returned when channel is not whitelisted. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

## Example
```
$nomention
$onlyForChannels[$channelID[bot-commands];$channelID[staff-commands];❌ Please use this command in a bot commands channel!]
```
> 🤔 **Explanation:** For this example, insert the code you want to execute if the command is used in one of the whitelisted channels below the `$onlyForChannels[]` function. If a channel with the name `bot-commands` and/or `staff-commands` doesn't exist, `$onlyForChannels[]` will throw a unintended function error! It may be better to use raw channel IDs instead of `$channelID[channel name]`.

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*