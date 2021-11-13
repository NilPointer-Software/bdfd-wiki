# Parsing Mentions
#### How do I mention the command's author?\
`<@$authorID>`

#### How do I mention the channel that the command was ran in?
`<#$channelID>`

#### How do I mention a user?
Discord uses this syntax: `<@USER_ID>` to mention a user. For example, let's say that `$authorID` is equal to `246604909451935745`. 
If we use this: `<@$authorID>`, it will be replaced with `<@246604909451935745>` and Discord will interpret that as a mention *(@User)*. This applies to other functions that return user IDs as well, e.g. `<@$findUser[$message;yes]>`. You can also mention a specific user by replacinh the `USER_ID` in `<@USER_ID>` with a valid user ID.

#### How do I mention a role?
Discord uses this syntax: `<@&ROLE_ID>` to mention a role. For example, let's say that `$roleID[someRoleName]` is equal to `946605807451935745`. 
If we use this: `<@&$roleID[someRoleName]>`, it will be replaced with `<@946605807451935745>` and Discord will interpret that as a mention *(@someRoleName)*. This applies to other functions that return role IDs as well, e.g. `<@&$findRole[$message]>`. You can also mention a specific user by replacing the `ROLE_ID` in `<@&ROLE_ID>` with a valid role ID.

#### How do I mention a channel?
Discord uses this syntax: `<#CHANNEL_ID>` to mention a channel. For example, let's say that `$channelID` is equal to `746695805451935745`. 
If we use this: `<#$channelID>`, it will be replaced with `<#746695805451935745>` and Discord will interpret that as a mention *(#channel)*. This applies to other functions that return channel IDs as well, e.g. `<#$findChannel[$message]>`. You can also mention a specific user by replacing the `CHANNEL_ID` in `<@&CHANNEL_ID>` with a valid channel ID.