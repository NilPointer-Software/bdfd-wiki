# Permissions
**Permissions** allow users to have specific privileges and access in the server. Some permissions can be as basic as allowing users the ability to add reactions to messages while other permissions grant users more administrative actions. These permissions are based on the roles assigned to users in a server and permissions can be assigned per role on both the server level and channel level.

## List of Permissions
Following is the list of permissions which are supported in BDFD -

Permission | Description 
----- | -----  
addreactions | Allows to react emojis in messages *(Doesn't affect existing emojis in messages)*.
admin | Grants all permissions and bypasses all channel permissions overwrites.
attachfiles | Allows to upload attachments in channels.
ban | Allows banning/unbanning members.
changenicknames | Allows editing own server nickname.
connect | Allows to join voice/stage channels.
createinstantinvite | Allows to create invites.
createprivatethreads | Allows to create private threads.
createpublicthreads | Allows to create public threads.
embedlinks | Allows to send embedded content and links in channels.
externalemojis | Allows to use custom emojis from a different server.
externalstickers | Allows to use custom stickers from a different server.
kick | Allows kicking members.
managechannels | Allows to create/delete/modify channels of the server.
manageemojis | Allows to create/delete/modify custom emojis and stickers of the server.
manageevents | Allows to create/delete/modify events in the server.
managemessages | Allows deleting messages of other members and pinning/unpinning messages in channels.
managenicknames | Allows to modify server members nicknames.
manageroles | Allows to create/delete/modify server roles. It also allows modifying individual channel's permissions.
manageserver | Allows to create/modify AutoMod rules, add bots, view invites and change server settings.
managethreads | Allows to create/delete/modify channel threads.
managewebhooks | Allows to create/delete/modify channel webhooks.
mentioneveryone | Allows to mention ping `@everyone`, `@here` and all server roles.
moderatemembers | Allows to timeout/untimeout members. This permission is also known as *"Timeout members"*.
movemembers | Allows to move members between voice/stage channels.
priorityspeaker | Allows to be easily heard in voice/stage channels.
readmessagehistory | Allows to view channel message history.
readmessages | Allows to view a channel. This permission is also known as *"View channel"*. 
requesttospeak | Allows to request to speak in stage.
sendmessages | Allows to send messages in channels.
sendmessagesinthreads | Allows to send messages in threads.
slashcommands | Allows to use application commands *(i.e slash commands, context-menus)* in channels. This permission is also known as *"Use Application Commands"*.
speak | Allows to speak in voice/stage channel.
stream | Allows to stream live in voice/stage channels.
tts | Allows to send text-to-speech (tts) messages.
usevad | Allows to use voice-activity detection. Members without this permission will have to use push-to-talk voice feature. This permission is also known as *"Use voice activity"*.
viewauditlog | Allows to view server audit logs.
viewguildinsights | Allows to view [insights](https://discord.com/developers/servers) of a server.
voicedeafen | Allows to deafen a member in voice/stage channel.
voicemute | Allows to mute a member from speaking in voice/stage channel.

> 📝 All permissions are case insensitive (i.e both `BAN` and `Ban` will work).  
