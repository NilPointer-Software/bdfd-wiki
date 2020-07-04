# Changelog
*Note that we often forget to update this article, so some stuff are missing.*

## July
- Renamed `$splitText[]` to `$getSplitText[]` to avoid confusion _(`$splitText[]` still works)_
- Added `$joinSplitText[]`
- Added `$getInviteInfo[]`
- Added `$guildID[name]`
- Fixed `$numberSeparator[]` in the bot's status
- `$roleID[]` and `$channelID[]` no longer stop code execution
- Enabled BDScript Unstable for callbacks

## June
- Fixed `$getReactions[]` in BDScript Unstable
- `$message` works in `$onMessageDelete[]` callback now
- Fixed bracket escaping for some commands in BDScript Unstable
- Fixed `$modifyChannel[]` (random slowdowns added on channels)

## May
- Fixed `$onlyBotPerms[]`
- Bot Designer List Open Beta
- Added `$botListDescription[]` and `$botListHide`
- Fixed brackets issue in `$serverNames`
- Other bug fixing for Bot Designer and Bot Designer List

## April
- Fixed `$serverIcon`
- Added `$changeCooldownTime[]`
- Disabled `$randomUserID`, `$'randomUserID`, `$deleteIn` and `$dm` in `$onMessageDelete`
- Fixed `$addField[]`
- Added error message in `$getServerVar` when provided variable does not exist
- `$userID` does not stop code execution if user is not found
- Added `$botLeave`
- Removed permission check from `$clear` command.
- Fixed `$isAdmin[]`

## March
- Added `$getReactions` and `$userReacted`
- New command interpreter
- Added to new parser:
    - `$'random[]` and `$'random`
    - `$'randomText[]`
    - `$'randomUser`
    - `$'randomMention`
    - `$'randomUserID`
    - `$'randomString[]`
- Fixed brackets in `$getMessage[]`
- Changed behaviour of `$onlyPerms` command
- Added `$charCount`
- Added `$clearReactions`
- Added new options to `$getMessage`
- Fixed adding slowmode when using `$modifyChannel`
- Added `$checkContains`
- Added `$addEmoji`
- Fixed the bug with `$` command prefix and `$noMentionMessage`
- Added `$unbanID[id]`
- Added `$hasRole[]`
- Optimized the leaderboard commands
- Fixed permissions in some commands
- Fixed `$onlyPerms`
- Fixed the bug with `$` command prefix and `$message`

## February
- Fixed errors in `$addField`
- Added `$serverRegion`
- Added `$serverOwner`
- Added `$emoteCount`
- Added `$isMentionable`
- Added `$isHoisted`
- Added `$serverIcon[serverID]`
- Fixed suppressing errors in some variable commands
- Fixed bug with `$replaceText[]()` inside `$description`
- Added `$isValidHex`
- Added `$isAdmin[]`
- `$userID` does not require discriminator now
- Added `$serverVerificationLvl`
- Fixed stopping command when `$changeUsernameWithID` or `$changeUsername` throws an exception
- Added `$modifyRolePerms`
- Added `$isUserDMEnabled`
- Added new option to `$mentioned`
- When userID is not provided in `$discriminator`, the author's id will be used
- Added `$argCount`
- Added `$roleExists` and `$roleExists` 
- Added `$varExistError`
- Removed permissions check for `$kick` function
- Fixed brackets issue in `$message` and `$noMentionMessage`
- Fixed `$globalUserLeaderboard`
- `$repeatMessage` won't send an error when there is `0` provided

## January
- Final premium preparations
- Space commands for premium bots
- Added `sendChannelMessage()` to JS
- Added `$isNumber`
- Better description for` $replaceText`
- Removed `#` from `$getRoleColor`
- Added possibility of adding custom error message to `$suppressErrors`
- Added `$embedSuppressErrors`
- Added `$getServerVar` in command's name for premium bots
- Added custom separators to `$numberSeparator`
- Fixed issue with `+` and `-` in `$numberSeparator`
- iOS release
- Added `$isBot[]`
- Added `userID` option to `$takeRole`
- Fixed problems with timezones
- `@everyone` role shows up now when it's a highest/lowest role in `$highestRole/$lowestRole`
- `@everyone` role now works in `$rolePosition`
- Multiline for `$replaceText`
- Fixed no errors in `$roleID[]`
- Added `$toUppercase[]` and `$toLowercase[]`
- Added `roleID` and userID to `$modifyChannelPerms`
- Added `$authorOfMessage[]`
- Added `$userID[]`
- Improved servers response time by over 10x
- Fixed issues with `$setServerVar[]` and `$setUserVar[]`
- Added multiline support for `$textSplit[]`
- Fixed brackets in `$username`

## December
- Fixed high ping issues
- Fixed whole bunch of other issues
- To JS added:
    - authorId,
    - channelId,
    - userMentions,
    - roleMentions,
    - unban(),
    - takeRole(),
    - giveRole(),
    - channelTyping(),
    - createChannel(),
    - removeChannel(),
    - unpinMessage(),
    - banWithReason(),
    - kickWithReason(),
    - removeRole(),
    - createRole()
- Created status website https://status.botdesignerdiscord.com
- Web version of *Bot Designer for Discord* has been moved to new address https://botdesignerdiscord.com
- Fixed some issues in web version
- Fixed `$banID`
- Preparations for premium points

## November
- Added `$rolePosition[roleID]`
- Released translation strings to volunteers
- Added `kick()` and ban() to JS
- Released new stable version
