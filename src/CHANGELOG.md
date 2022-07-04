# Changelog
*Note that we often forget to update this article, so some stuff is missing.*

# 2022

## July
- Added hex to the color picker
- Fixed `$executionTime` not working inside embed fields
- App now sends notification when bot hosting is expired
- Added `$sendNotification[]` for premium bots

## June
- Fixed `$onlyBotChannelPerms[]`
- Fixed description verification in `$addSelectMenuOption[]` and `$editSelectMenuOption[]`
- Updated limits of select menu options
- Fixed updating components which are refering to `$messageID`

## May
- Fixed token issues
- Fixed disappearing slash command options
- `AllowedMentions` field is now used in `$channelSendMessage[]`, `$sendEmbedMessage[]` and `$sendMessage[]`
- Fixed black screen after bot creation
- Fixed in-app tutorial
- Fixed escaping response in interactions
- Fixed cooldown error messages
- Fixed empty values in variables not getting saved
- Fixed userID being ignored when guildID was passed to `$getUserVar[]`

## April
- Added `"return ID of the ticket message"` argument to `$newTicket[]`
- Fixed disappearing slash commands from the app's state

## March
- **If you're getting Invalid permissions error on your invite link,  disable Stream and View guild insights permissions in the invite editor.**
- Added `$toTitleCase[]`
- Fixed invite permission calculator
- Fixed `$suppressErrors[]` and `$embedSuppressErrors[]` getting ignored by components errors
- Fixed updating some components
- Added `$registerGuildCommands[]`
- Added `$unregisterGuildCommands[]`
- Added `/callback_list`, `/callback_tag_list`, and `/callback/:callback_tag` endpoints to public BDFD API

## February
- `$httpResult[]` can return JSON now
- Fixed `$httpResult[]` not working with multiple requests
- Saving a command in the webapp no longer restarts the bots
- Optimized slash commands resynchronization
- Fixed custom images not working after saving a command
- Made it possible to escape `\` by using `\\`
- **Removed user permission check for $ban[], $banID[], $unban[] and $unbanID[]**
- Added `$newModal[]`
- Added `$addTextInput[]`
- Added `$input[]`
- Deprecated `$channelIDFromName[]`, use `$channelID[]` instead
- Added `$onlyForCategories[]`
- Fixed `$modifyChannelPerms[]` ignoring last permission
- Added `$onAutoComplete[]` callback
- Added `$autoCompleteOptionName`
- Added `$autoCompleteOptionValue`
- Added `$appendOptionSuggestion[]`

## January
-  Added `$unescape[]`
-  Added a neutral permission (`/<perm>`) to `$modifyChannelPerms[]`
-  Added stop bot button in the app
-  Added restart bot button in the app
-  Added `$editChannelPerms[]` (replacement for the deprecated `$modifyChannelPerms[]`)
-  Added `$roleGrant[]` (replacement for the deprecated `$giveRole[]` and `$takeRole[]`)
-  Fixed component functions inside `$async[]` scope
-  Increased the limit of http functions in one command to `5`
-  Fixed `$userPerms[]`
-  Fixed some bugs regarding math commands
-  Added public BDFD API
-  Added `$serverDescription[]`

# 2021

## December
- Saving a command no longer causes the bot to restart
- Fixed `$noMentionMessage[]` in BDScript 2
- Added `$timeout[]` and `$untimeout[]`
- `$mute[]` and `$unmute[]` has been marked as deprecated
- Added `guildID` argument to `$getUserVar[]` and `$setUserVar[]`
- Fixed the issue with some bots not starting with invalid intents enabled
- Fixed the role cache
- Slash command's option description is now required
- Added `$shardID[]`
- Added sharding
- Improved interaction handling
- Added `$defer`
- Fixed getting invites
- Added debug information inside the app for translators
- Fixed `$serverNames`
- Added `%` *(modulo)* to `$calculate[]`
- Fixed removing custom images
- Added missing permissions
- Fixed unintentional server restarts
- The last argument in `$replaceText[]` is now optional

## November
- Added `$reply[]`
- Added `$trimSpace[]`
- Added `$url[]`
- Upgraded the database
- Sped up the node starting time
- Added `$botCommands[]`
- Added `$unpinMessage[]`
- Added `$pinMessage[]`
- Fixed `$isUserDMEnabled[]` not returning false in some cases
- `$addReactions[]` now works in slash commands
- `$dm[]` now can dm to more than one mention and can be used multiple times
- `$dm` now can be used with `$dm[]`
- `$random[]` now can use decimals
- Added `$'randomChannelID` (BDScript Unstable only)
- Fixed `$textSplit[]` removing space

## October
- Added `$deleteMessage[]`
- Added `$hostingExpireTime[]`
- Added timestamp option to `$premiumExpireTime`
- Fixed `$isUserDMEnabled[]`
- Fixed `image` parameter in `$sendEmbedMessage[]` and `$webhookSend[]`
- Fixed caching issue for `$serverIcon`
- Made it possible to use empty labels in the buttons
- New UI
- Added search bar in the variables section
- Made it possible to use `https://youtu.be/` URL in the streaming statuses
- Added `$getTextSplitIndex[]`
- Added `$serverChannelExists[]`
- Fixed `$changeUsername[]` `$changeUsernameWithID[]` not working on the current bot
- Made `$ephemeral` work with the buttons
- Fixed global variables not getting saved
- Fixed `$deletecommand` not getting catched by `$try` block
- Made it possible to open function's wiki article from the functions list

## September
- Updated ToS
- Fixed `$executionTime` not working in embeds
- Added `$botNode`
- Added `$isBanned[]`
- Fixed a problem with `$charCount[]` having problems with unicode
- Added `$channelType[]`
- Added `$async[]` block function and `$endasync`
- Added `$await[]`
- Added `$sort[]`
- Added `$userPerms[]`
- Added `$serverNames[]`
- Improved variables lookup time

## August
- Added `$webhookTitle[]`
- Added `$webhookDescription[]`
- Added `$webhookFooter[]`
- Added `$webhookContent[]`
- Added `$webhookUsername[]`
- Added `$webhookAvatarURL[]`
- Added `$webhookCreate[]`
- **Removed permission check from** `$deleteChannelsByName[]`
- **Removed permission check from** `$deleteChannels[]`
- **Removed permission check from** `$createChannel[]`
- Fixed the issue with bots not working in threads
- Added `$startThread[]`
- Added `$webhookColor[]`
- Fixed optional field in `$getServerVar[]`
- Fixed floating points in `$onlyIf[]` conditions
- Added `$webhookDelete[]`
- Added `$webhookSend[]`
- **Removed permission check from** `$modifyChannelPerms[]`
- Made it possible to use multiple `$onInteraction[]`s
- Added `$onInteraction` callback (without `[]`)
- Added `$customID`
- Made it possible to use different scripting languages in callbacks
- Added `$editThread[]`
- Added `$threadAddMember[]`
- Added `$threadRemoveMember[]`
- Added `$getEmbedData[]`
- Made it possible to use block functions (`$if[]`, `$try`, etc.) inside function arguments in BDScript 2
- Fixed preprocessor failures in some corner cases in BDScript 2
- Fixed a bug with block-functions adding extra new line in BDScript 2
- Fixed and optimised `$setVar[]`
- Added `$sendEmbedMessage[]`
- Fixed condition parsing in `$if[]` for the normal BDScript and BDScript Unstable (BDScript 2 didn't have any issues)
- Made command saving faster

## July
- Added `$getTimestamp`
- Added support for decimals in the math functions
- Added `$newSelectMenu[]`
- Added `$addSelectMenuOption[]`
- Added `$editSelectMenu[]`
- Added `$editSelectMenuOption[]`
- Added `$removeComponent[]`
- Added `$calculate[]`
- Added `$round[]`
- Added `$enableDecimals[]`
- Added `$nickname`
- Added row and column information in BDScript 2 errors
- Fixed the issue with BDScript 2 not requiring `]`
- Adjusted the optimizer in BDScript 2
- Added `$onlyForRoleIDs[]`
- Added `$getCooldown[]`
- Fixed problems with `]` in some functions
- Fixed component functions inside `$eval[]` function
- Fixed minor bugs inside BDScript 2 parser
- Fixed author ID not showing up in `$mentioned[..;yes]`
- Fixed `$serverNames` which removed two last characters
- Fixed `$addTimestamp[]` when used for multiple embeds
- Added limits for the `$round[]` function *(max decimal place)*
- Added `$and[]`
- Added `$or[]`
- Added `$allowRoleMentions[]`
- Added `$allowUserMentions[]`
- Added `$guildExists[]`
- Fixed `$serverVerificationLvl`

## June
- Fixed `$sendMessage[]` not working in normal BDScript
- Fixed `$checkUserPerms[]`
- Added **[BDScript 2](./guides/bdscript2.md)**
- Added **[$try, $catch and $error](./guides/trycatch.md)**
- Added `$eval[]` **(can be only used in BDScript 2)**
- Added `$optOff[]` **(can be only used in BDScript 2)**
- Added `$stop[]` **(can be only used in BDScript 2)**
- Added `$var[]` **(can be only used in BDScript 2)**
- Added customizable code highlighting
- Fixed `$lowestRole` and `$highestRole`
- Added `$isBoolean[]`
- Made it possible to add 5 buttons per row
- Added optional field `return type` to `$getLeaderboardValue[]`
- Added `$deleteRole[]`
- Added `$ephemeral`
- Added `$elseif[]` **(can be only used in BDScript 2)**
- Fixed URL in buttons
- Fixed buttons in DMs
- Fixed problems with custom prefixes
- Added `$getUserStatus[]`
- Added `$min[]`
- Added `$max[]`
- Fixed `$customEmoji[]`
- Made it possible to edit embeds in `$editMessage[]`
- Added support for multiple embeds
- Added `$httpAddHeader[]`
- Added `$httpRemoveHeader[]`

## May
- Fixed a bug which allowed executing certain types of callbacks as normal commands
- Fixed member caching issue
- Fixed caching bots
- Fixed changing tokens in the webapp
- Fixed `$isUserDMEnabled[]`
- Added `$addButton[]`
- Added `$editButton[]`
- Added `$removeButtons` and `$removeButtons[]`
- Added `$onInteraction[]` callback
- Fixed some issues with slash commands
- Added `$c[]` which can be used for commenting your code

## April
- Added `$httpGet[]`, `$httpPost[]`, `$httpPut[]`, `$httpDelete[]` and `$httpPatch[]`
- Improved overall caching
- Added `$httpResult[]`
- Made command execution faster

## March
- Added `$cropText[]`
- Added `userID` field to `$awaitFunc[]`
- Fixed removing normal commands and slash commands
- Added `$removeLinks[]`
- Made returning authorID optional in `$findUser[]`
- Added `$slowmode[]`
- Added `$checkUserPerms[]`
- Added `$isNSFW[]`
- Fixed setting NSFW in `$modifyChannel[]`
- Fixed `$userJoined[]` and `$userJoinedDiscord[]`
- Added `$editMessage[]`
- Fixed caching for new members.
- Added `$slashCommandsCount`
- Added `$botID`
- Added more permissions - AttachFiles, TTS, ManageWebhooks, EmbedLinks, ExternalEmojis
- Added `$serverCooldown[]`
- Fixed the issue with not expiring app bans
- Fixed some issues with `[` and `]`
- Fixed problems with slash commands and cooldowns

## February
- Added `$sendMessage[]`
- Added `$reply`
- Added slash commands
- Fixed mentions in `$findChannel[]`
- Improved performance in the command interpreter
- Optimized reaction handlers
- Added `$isSlash`
- Added new optional field to `$message[]`
- Fixed semicolons in `$channelSendMessage[]`

## January
- Fixed the problem with statuses not showing up
- Fixed the issue with mentions not working
- Fixed loading bots from database
- Increased duration to 40 minutes for `$deleteIn[]`, `$editIn[]`, `$editEmbedIn[]`, `$replyIn[]`
- Added if statements (`$if[]`, `$else`, `$endif`)
- GuildID instead of `everyone` is now returned in `$lowestRole[]` and `$highestRole[]`
- Space commands have been removed (you can still use `$alwaysReply`)
- Added `$channelTopic[]`
- Fixed issues with streaming status
- Fixed the issue with tags/discriminators not working for `$userID[]` and `$findUser[]` 
- Added `$findChannel[]` and `$channelExists[]`
- Added `$userJoined[]` and `$userJoinedDiscord[]`

# 2020

## December
- Timezones in `$time[]` has been fixed
- Updated discord API version
- Added Competing presence
- Added `$botLeave[]`
- Fix for `$getLeaderboardValue[]`
- Added userID option to reset user var
- Added serverID option to `$serverOwner`
- Added `$premiumExpireTime`

## November
- Fixed disappearing bot status
- Fixed `$serverCount` in bot status
- Improved caching
- Functions that require privileged intents are now marked accordingly 
- Added `$getLeaderboardValue[]`
- Added `$awaitReactions[]`
- Awaited commands are now available for everyone
- Added awaited reactions
- Fixed problems with DMs

## October
- Optimized memory usage
- Added member and presence intents
- Added `$editEmbedIn[]`
- Added `serverID` field to server variables
- Allowed using awaited functions in awaited commands
- Fixed leaderboards
- Fixed `$randomMention`, `$randomUser` and `$randomUserID`
- Added `$awaitReactions[]` for premium bots
- Added `$usedEmoji`
- `$deletecommand` sends an error now
- Fixed `$serverVerificationLvl` not working on very high verification servers
- Fixed reconnecting bots to gateway

## September
- Added `$ignoreTriggerCase` for premium bots
- Fixed caching guilds
- `$findUser[]` & `$findRole[]` are no longer case sensitive
- `$findUser[]` returns authorID if no user found
- Added awaited commands for premium bots
- Fixed weird brackets in embeds
- Added trigger list in the app

## August
- Migrated to the new infrastructure (new database and API)
- Premium released
- Fixed `$isMentionable[]`
- Fixed `$isHoisted[]`
- Added `$removeSplitTextElement[]`
- `$userAvatar[]` no longer stops code execution
- Fixed `$argCount[]`
- Added `$findUser[]`
- Added `$findRole[]`
- Added `$disableSpecialEscaping`

## July
- Renamed `$splitText[]` to `$getSplitText[]` to avoid confusion _(`$splitText[]` still works)_
- Added `$joinSplitText[]`
- Added `$getInviteInfo[]`
- Added `$guildID[]`
- Fixed `$numberSeparator[]` in the bot's status
- `$roleID[]` and `$channelID[]` no longer stop code execution
- Enabled BDScript Unstable for callbacks
- Added `$getTextSplitLength`

## June
- Fixed `$getReactions[]` in BDScript Unstable
- Fixed bracket escaping for some commands in BDScript Unstable
- Fixed `$modifyChannel[]` (random slowmodes added on channels)

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
- Added error message in `$getServerVar[]` when provided variable does not exist
- `$userID[]` does not stop code execution if user is not found
- Added `$botLeave`
- Removed permission check from `$clear` command.
- Fixed `$isAdmin[]`

## March
- Added `$getReactions[]` and `$userReacted[]`
- New command interpreter
- Added to new parser:
    - `$'random[]` and `$'random`
    - `$'randomText[]`
    - `$'randomUser`
    - `$'randomMention`
    - `$'randomUserID`
    - `$'randomString[]`
- Fixed brackets in `$getMessage[]`
- Changed behaviour of `$onlyPerms[]` command
- Added `$charCount[]`
- Added `$clearReactions[]`
- Added new options to `$getMessage[]`
- Fixed adding slowmode when using `$modifyChannel[]`
- Added `$checkContains[]`
- Added `$addEmoji[]`
- Fixed the bug with `$` command prefix and `$noMentionMessage`
- Added `$unbanID[]`
- Added `$hasRole[]`
- Optimized the leaderboard commands
- Fixed permissions in some commands
- Fixed `$onlyPerms[]`
- Fixed the bug with `$` command prefix and `$message`

## February
- Fixed errors in `$addField`
- Added `$serverRegion`
- Added `$serverOwner`
- Added `$emoteCount`
- Added `$isMentionable[]`
- Added `$isHoisted[]`
- Added `$serverIcon[]`
- Fixed suppressing errors in some variable commands
- Fixed bug with `$replaceText[]()` inside `$description`
- Added `$isValidHex[]`
- Added `$isAdmin[]`
- `$userID[]` does not require discriminator now
- Added `$serverVerificationLvl`
- Fixed stopping command when `$changeUsernameWithID[]` or `$changeUsername[]` throws an exception
- Added `$modifyRolePerms[]`
- Added `$isUserDMEnabled[]`
- Added new option to `$mentioned[]`
- When userID is not provided in `$discriminator[]`, the author's ID will be used
- Added `$argCount[]`
- Added `$roleExists[]` and `$roleExists[]` 
- Added `$varExistError[]`
- Removed permissions check for `$kick[]` function
- Fixed brackets issue in `$message` and `$noMentionMessage`
- Fixed `$globalUserLeaderboard[]`
- `$repeatMessage[]` won't send an error when there is `0` provided

## January
- Final premium preparations
- Space commands for premium bots
- Added `sendChannelMessage()` to JS
- Added `$isNumber[]`
- Better description for` $replaceText[]`
- Removed `#` from `$getRoleColor[]`
- Added possibility of adding custom error message to `$suppressErrors[]`
- Added `$embedSuppressErrors[]`
- Added `$getServerVar[]` in command's name for premium bots
- Added custom separators to `$numberSeparator[]`
- Fixed issue with `+` and `-` in `$numberSeparator[]`
- iOS release
- Added `$isBot[]`
- Added `userID` option to `$takeRole[]`
- Fixed problems with timezones
- `@everyone` role shows up now when it's a highest/lowest role in `$highestRole/$lowestRole`
- `@everyone` role now works in `$rolePosition[]`
- Multiline for `$replaceText[]`
- Fixed no errors in `$roleID[]`
- Added `$toUppercase[]` and `$toLowercase[]`
- Added roleID and userID to `$modifyChannelPerms[]`
- Added `$authorOfMessage[]`
- Added `$userID[]`
- Improved servers response time by over 10x
- Fixed issues with `$setServerVar[]` and `$setUserVar[]`
- Added multiline support for `$textSplit[]`
- Fixed brackets in `$username`

# 2019

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
- Fixed `$banID[]`
- Preparations for premium points

## November
- Added `$rolePosition[]`
- Released translation strings to volunteers
- Added `kick()` and `ban()` to JS
- Released new stable version
