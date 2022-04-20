# $untimeout
Untimeouts a user, similar to unmuting, but it is a built-in Discord [feature](https://support.discord.com/hc/en-us/articles/4413305239191-Time-Out-FAQ).

## Usage
```php
$untimeout[duration;(userID)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| userID |  The user to untimeout. **\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** If you use `$untimeout[]` (with brackets but no `userID`), then the mentioned user(s) will be timed out.

## Examples
### Example #1
*Simple example that uses mentions:*

```
$nomention
$untimeout[]
**$username[$mentioned[1]]#$discriminator[$mentioned[1]]** was untimed out.
```
![](https://user-images.githubusercontent.com/69215413/147888766-ecbea092-119b-4d9e-9b10-c96a4b8e9b07.png)

### Example #2
*Optimized example that uses mentions or IDs:*
```
$nomention
$argsCheck[>1;Usage: `!untimeout (user)`]
$allowMention

$onlyBotPerms[moderatemembers;❌ I need the **Timeout Members** permission in order to untimeout users.]
$onlyPerms[moderatemembers;❌ You need the **Timeout Members** permission in order to untimeout users.]

$var[user;$findUser[$message[1];no]]

$onlyIf[$var[user]!=;❌ Failed to find member!]
$onlyIf[$highestRole[$var[user]]<$highestRole[$botID];❌ User provided has a higher role than me, so I can't time them out.]
$onlyIf[$highestRole[$var[user]]<$highestRole[$authorID];❌ User provided has a higher role than you, so you can't time them out.]

$untimeout[$var[user]]
Untimed out **$username[$var[user]]#$discriminator[$var[user]]**.
```
![](https://user-images.githubusercontent.com/69215413/147888806-94024cd0-46df-4a13-b84c-78788a778a18.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*