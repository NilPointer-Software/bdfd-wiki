# Permissions
This article holds lists of supported permissions in *Bot Designer for Discord*.

### Role Permissions
Role permissions are what you use in [`$modifyRolePerms[]`](/src/bdscript/modifyRolePerms.md), [`$onlyPerms[]`](/src/bdscript/onlyPerms.md), and [`$onlyBotPerms[]`](/src/bdscript/onlyBotPerms.md). You should not use these for [`$modifyChannelPerms[]`](/src/bdscript/modifyChannelPerms.md) or [`$onlyBotChannelPerms[]`](/src/bdscript/onlyBotChannelPerms.md) (see [Channel Permissions](#channel-permissions) instead).

- `addreactions` - Allows reacting to messages.
- `admin` - Grants access to all channels and all permissions, it ignores all channel overrides.
- `attachfiles` - Allows for send images/videos/files.
- `ban` - Allows banning of users with lower roles than the user with the ban permission.
- `changenicknames` - Allows for changing of the user's own nickname.
- `connect` - Allows for connecting to voice channels.
- `createinstantinvite` - Allows for creating server invites.
- `createprivatethreads` - Allows for creating private thread channels.
- `createpublicthreads` - Allows for creating public thread channels.
- `embedlinks` - Allows for use of embedded content in links.
- `externalemojis`/`externalstickers` - Allows use of emojis and stickers from servers other than the current server (for Discord Nitro users).
- `kick` - Allows kicking of users with roles than the user with the kick permission.
- `managechannels` - Allows creating, editing, and deleting of channels.
- `manageemojis` - Allows creating, editing, and deleting of emojis and stickers.
- `manageevents` - Allows for creating and modifying server events.
- `managemessages` - Allows for deleting messages, and makes the user bypass slowmode.
- `managenicknames` - Allows for changing user's nicknames, of both the user's own nickname and other's nicknames.
- `manageroles` - Allows creating, editing, and deleting of roles.
- `manageserver` - Allows for editing server elements such as server icon, server name, etc.
- `managethreads` - Allows for deleting, archiving, unarchiving, and managing thread channels.
- `managewebhooks` - Allows creating, editing, and deleting webhooks.
- `mentioneveryone` - Allows for mentioning *@everyone*, *@here*, and all roles; regardless of the "Allow anyone to mention this role" setting.
- `moderatemembers` - Allows for untiming/timing out users.
- `movemembers` - Allows for moving members to different voice channels.
- `priorityspeaker` - Allows use of priority speaker.
- `readmessagehistory` - Allows for reading the channel's message history.
- `readmessages` - Allows for reading of messages.
- `requesttospeak` - Allows for requesting to speak in Stage voice channels.
- `sendmessages` - Allows for sending of messages.
- `sendmessagesinthreads` - Allows for sending of messages in threads.
- `slashcommands` - Allows for use of slash commands.
- `speak` - Allows the user to speak in a voice channel.
- `stream` - Allows the user to stream in a voice channel.
- `tts` - Allows users to send text-to-speech messages.
- `usevad` - Allows for using voice-activity-detection in a voice channel.
- `viewauditlog` - Allows for viewing of server audit logs.
- `viewguildinsights` - Allows for viewing server insights.
- `voicedeafen` - Allows for deafening users in voice channels.
- `voicemute` - Allows for muting users in voice channels.

### Channel Permissions
All channel permissions are role permissions, but all role permissions are not channel permissions. If a role has a permission enabled/disabled that'll be its default status in the channel permission overrides (if a channel override is on default you'll see a `/` highlighted.

- `addreactions` - Allows reacting to messages in this channel.
- `attachfiles` - Allows for send images/videos/files in this text channel.
- `connect` - Allows for connecting to this voice channel.
- `createinstantinvite` - Allows for creating server invites in this channel.
- `createprivatethreads` - Allows for creating private thread channels in this text channel.
- `createpublicthreads` - Allows for creating public thread channels in this text channel.
- `embedlinks` - Allows for use of embedded content in links in this text channel.
- `externalemojis`/`externalstickers` - Allows use of emojis and stickers from servers other than the current server (for Discord Nitro users) in this text channel.
- `managechannels` - Allows creating, editing, and deleting of this channel.
- `managemessages` - Allows for deleting messages in this text channel, and makes the user bypass slowmode.
- `managethreads` - Allows for deleting, archiving, unarchiving, and managing thread channels in this text channel.
- `managewebhooks` - Allows creating, editing, and deleting webhooks in this text channel.
- `mentioneveryone` - Allows for mentioning *@everyone*, *@here*, and all roles; regardless of the "Allow anyone to mention this role" setting in this text channel.
- `movemembers` - Allows for moving members to different voice channels.
- `priorityspeaker` - Allows use of priority speaker in this voice channel.
- `readmessagehistory` - Allows for reading the channel's message history in this text channel.
- `readmessages` - Allows for reading of messages in this text channel.
- `requesttospeak` - Allows for requesting to speak in this Stage voice channel.
- `sendmessages` - Allows for sending of messages in this text channel.
- `sendmessagesinthreads` - Allows for sending of messages in threads under this text channel.
- `slashcommands` - Allows for use of slash commands in this text channel.
- `speak` - Allows the user to speak in this voice channel.
- `stream` - Allows the user to stream in this voice channel.
- `tts` - Allows users to send text-to-speech messages in this text channel.
- `usevad` - Allows for using voice-activity-detection in this voice channel.
- `voicedeafen` - Allows for deafening users in this voice channel.
- `voicemute` - Allows for muting users in this voice channel.