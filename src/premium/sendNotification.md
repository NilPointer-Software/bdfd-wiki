# $sendNotification
*(for premium bots)*

Sends a notification to your mobile phone.

## Syntax
```
$sendNotification[Message;(Image URL)]
```

### Parameters 
- `Message` `(Type: String || Flag: Required)`: The text that is displayed in the notification.
- `Image URL` `(Type: String || Flag: Optional)`: The URL for the image to be attached.

## Example
```
$sendNotification[Hello, I miss you!;$userAvatar[$botID]]
```

![example](https://i.imgur.com/yfSTLVY.png)
