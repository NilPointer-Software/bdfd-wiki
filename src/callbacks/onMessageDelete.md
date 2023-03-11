# $onMessageDelete
Triggered when a user deletes a message.

## Syntax 
```
$onMessageDelete[channel ID]
```

### Parameters
- `channel ID`: The channel to which the resulting message will be sent.

> [How to get a channel ID guide.](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)
## Example
### With `$getServerVar[]`
Make a new command, with the trigger `$onMessageDelete[$getServerVar[channel]]`
```
$nomention
A massage was deleted!
```
![example](https://user-images.githubusercontent.com/113303649/223441552-4e699a36-3d77-40fa-bea8-f3752de1f749.png)

![example](https://user-images.githubusercontent.com/113303649/223442073-024364e6-17d9-4118-bcab-f12575a447d0.png)
### Without `$getServerVar[]`
Make a new command, with the trigger `$onMessageDelete[channel ID]` (You must replace `channel ID` with a valid channel ID)
```
$nomention
A massage was deleted!
```
![example](https://user-images.githubusercontent.com/113303649/223441552-4e699a36-3d77-40fa-bea8-f3752de1f749.png)

![example](https://user-images.githubusercontent.com/113303649/223442073-024364e6-17d9-4118-bcab-f12575a447d0.png)

> You can use `$channelID` to get the ID of the logs (`channel ID`).
> 
> You can use `$messageID` to get the ID of the deleted message.
