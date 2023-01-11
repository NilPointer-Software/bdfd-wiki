# $useChannel
Redirects the bot's response message to a different channel.

> 📌 [`$useChannel`](./useChannel.md) cannot redirect the original slash command response.

## Syntax
```
$useChannel[Channel ID]
```

### Parameters
- `Channel ID` `(Type : Snowflake || Flag : Required)` : The ID of the channel to where the message will be redirected.

## Example
```
$nomention
$useChannel[$mentionedChannels[1]]
$title[hello]
$description[hi]
```
![ex1](https://user-images.githubusercontent.com/69215413/125665386-b0458227-97d7-4aaa-9ca8-b1d869245bce.png)\
![ex2](https://user-images.githubusercontent.com/69215413/125665365-ade65a36-0c1e-4e1c-a5c5-ad9929f769bc.png)
