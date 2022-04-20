# $modifyChannelPerms
Modifies a channel's permission overrides.

## Usage
```php
$modifyChannelPerms[channelID;permissions;...;(userID/roleID)]
```
> 🗒️ **Note:** This function is depreacted as it uses a optional argument after ellipsis. The techical usage of it is `$modifyChannelPerms[channel ID;permission/(userID/roleID);...]`, where `(userID/roleID)` is the last argument of the ellipsis.

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| channelID | The channel to change the permissions for. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| permissions | The [permissions](/src/resources/permissions.md) to add/remove. | [Permission](/src/resources/arguments/types.md#permission) | [Required](/src/resources/arguments/flags.md#required) 
| userID/roleID | The role or user to modify the permission overrides for.  **\***​**\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** `+` means allow, `-` means deny, `/` means neutral.

**\***​**\*** Use `$guildID` for *@everyone*. If no `userID/roleID` is provided, then the *@everyone* role's permissions are edited.

## Examples
### Example #1
Lock:
```
$nomention
✅ Successfully locked <#$mentionedChannels[1;yes]>!
$onlyPerms[managechannels;❌ You need the manage_channels permission to use that!]
$modifyChannelPerms[$mentionedChannels[1;yes];-sendmessages;$guildID]
```
![](https://user-images.githubusercontent.com/69215413/123529809-19d01980-d6c2-11eb-9cc6-c9c9d559c5cb.png)

### Example #2
Unlock:
```
$nomention
✅ Successfully unlocked <#$mentionedChannels[1;yes]>!
$onlyPerms[managechannels;❌ You need the manage_channels permission to use that!]
$modifyChannelPerms[$mentionedChannels[1;yes];/sendmessages;$guildID]
```
![](https://user-images.githubusercontent.com/69215413/123529818-33716100-d6c2-11eb-99d9-c9f04399287a.png)