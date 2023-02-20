# $sendNotification
Sends notification to your mobile phone

## Usage
```
$sendNotification[message;(image URL)]
```

### Parameters 
- `message` `(Type: String || Flag: Required)`: The text that should be in the sent notification.
- `image URL` `(Type: String || Flag: Optional)`: The URL for the image to be attached.

## Example
```
$sendNotification[Hello, I miss you!;$userAvatar[$botID]]
```

![example](https://i.imgur.com/yfSTLVY.png)
