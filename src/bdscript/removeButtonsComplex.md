# $removeButtons[]
Removes all buttons from a message.

## Syntax
```
$removeButtons[Message ID]
```

### Parameters 
- `Message ID` `(Type: Snowflake || Flag: Required)`: The message from which all buttons will be removed.

> :pencil: When providing "Message ID", make sure the message author is the bot.

## Example
```
$nomention
$removeButtons[$message[1]]

✅ Removed all buttons from the message with ID `$message[1]`.
```
<img width="613" alt="example" src="https://user-images.githubusercontent.com/111157596/231754810-a73e546c-39ca-4295-9bb5-00f9c512a47f.png">
<img width="662" alt="example" src="https://user-images.githubusercontent.com/111157596/231754838-9e7145ff-1501-4a9c-87fe-95665916c651.png">
