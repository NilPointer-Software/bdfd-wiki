# $timeout
Timeouts a user, which similar to muting, but it is a built-in Discord [feature](https://support.discord.com/hc/en-us/articles/4413305239191-Time-Out-FAQ).
> 🧠 **Tip:** To untimeout a user, before the specified duration is completed, use [`$untimeout[]`](./untimeout.md).

## Usage
```php
$timeout[duration;(userID)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| duration | How long to timeout the user. | [Duration](/src/resources/arguments/types.md#duration) | [Required](/src/resources/arguments/flags.md#required)
| userID |  The user to timeout. **\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** If you use `$timeout[]` without a `userID`, then the mentioned user(s) will be timed out. You must provide a `duration` to timeout to users, no matter what.

## Examples
### Example #1
*Simple example that uses mentions:*

```
$nomention
$timeout[$noMentionMessage]
**$username[$mentioned[1]]#$discriminator[$mentioned[1]]** was timed out for **$noMentionMessage**.
```
![](https://user-images.githubusercontent.com/69215413/147887984-ff96795b-6d68-4e13-895b-0c43891a9b0b.png)

### Example #2
*Optimized example that uses mentions or IDs (and can untimeout members):*
```
$nomention
$argsCheck[>1;Usage: `!timeout (user) (how long)`
If `how long` is 0 then the user will be untimed out.]
$allowMention

$onlyBotPerms[moderatemembers;❌ I need the **Timeout Members** permission in order to timeout users.]
$onlyPerms[moderatemembers;❌ You need the **Timeout Members** permission in order to timeout users.]

$var[user;$findUser[$message[1];no]]

$onlyIf[$var[user]!=;❌ Failed to find member!]
$onlyIf[$serverOwner!=$var[user];❌ The server owner can't be timed out!]
$onlyIf[$authorID!=$var[user];❌ You can't timeout yourself!]
$onlyIf[$highestRole[$var[user]]<$highestRole[$botID];❌ User provided has a higher role than me, so I can't time them out.]
$onlyIf[$highestRole[$var[user]]<$highestRole[$authorID];❌ User provided has a higher role than you, so you can't time them out.]

$var[duration;]
$var[durMsg;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toLowercase[$message[2]];d;];h;];m;];s;];w;]]

$if[$isNumber[$var[durMsg]]]
  $var[duration;$message[2]]
$else
  $sendMessage[❌ Invalid duration provided!]
  $stop
$endif

$if[$var[duration]!=0]
  $timeout[$var[duration];$var[user]]
  **$username[$var[user]]#$discriminator[$var[user]]** has been timed out for **$var[duration]**.
$else
  $untimeout[$var[user]]
  Untimed out **$username[$var[user]]#$discriminator[$var[user]]**.
$endif
```
![](https://user-images.githubusercontent.com/69215413/147888552-184db552-675c-484c-b6b5-5c30e7d40336.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*