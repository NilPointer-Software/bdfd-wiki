# $publishMessage
Publishes a message from an announcement channel to all following servers.

## Syntax
```
$publishMessage[Channel ID;Message ID]
```
- `Channel ID` : The ID of the channel where the message is.
- `Message ID` : The ID of the message which needs to be publish.

## Example
```
$nomention
$publishMessage[$mentionedChannels[1;no];$noMentionMessage]
Message has been published!
```

![Screenshot_20221023_010339](https://user-images.githubusercontent.com/95774950/197359418-650ef696-0947-4082-81a2-212396d165eb.png)
![Screenshot_20221023_004859](https://user-images.githubusercontent.com/95774950/197359045-95cd01bd-d7af-42bb-bfa3-7d0c0d7bad14.png)
