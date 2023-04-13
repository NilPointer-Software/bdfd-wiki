# $removeButtons[]
Removes all buttons from a message.

## Syntax
```
$removeButtons[Message ID]
```

### Parameters 
- `Message ID` `(Type: Snowflake || Flag: Required)`: The message from which all buttons will be removed.

> 📝 When providing "Message ID", make sure the message author is the bot.

## Example
```
$nomention
$removeButtons[$message[1]]
Successfully removed all buttons from the message.
```
![example](https://user-images.githubusercontent.com/111157596/231867111-33a39b32-3d41-469f-802e-c8fe0eb360c9.png)
![example](https://user-images.githubusercontent.com/111157596/231867140-4e9a4917-4787-4caf-9aa6-9a4e88d51c95.png)
