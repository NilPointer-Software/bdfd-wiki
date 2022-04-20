# $dm
Direct messages a user.
> ⚠️ **Warning:** To DM someone, they must share at least one server with the bot, and have their DMs open publicly. To check if a user's DMs are open, you can use [`$isUserDMEnabled[]`](./isUserDMEnabled.md).

## Usages
- `$dm` - DMs the author of the command.
- `$dm[]` - DMs the first mentioned user.
- `$dm[userID;...]` - DMs the user's provided.

## Examples
### Example #1
```
$nomention
$onlyIf[$isUserDMEnabled[$authorID]==true;❌ You don't have your DMs enabled!]
$dm
Hello!
```
> 🤔 **Explanation:** This example DMs the author "Hello!"

### Example #2
```
$nomention
$onlyIf[$mentioned[1]!=;❌ You didn't mention anyone to DM "Hello!"]
$onlyIf[$isUserDMEnabled[$mentioned[1]]==true;❌ The user you mentioned doesn't have their DMs enabled!]
$dm[]
Hello!
```
> 🤔 **Explanation:** This example DMs the mentioned user "Hello!"

### Example #3
You can also use embeds in DM messages:
```
$nomention
$onlyIf[$isUserDMEnabled[$authorID]==true;❌ You don't have your DMs enabled!]
$dm
$title[Hello]
$description[Embeds are cool!]
$footer[Yeah, they are :D]
```

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*