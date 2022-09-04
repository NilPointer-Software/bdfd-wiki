# $sendNotification
Sends notification to your mobile phone

## Usage
```
$sendNotification[message;(image URL)]
```

### Breakdown
- `message` - The text that should be in the sent notification.
- `image URL` - The URL for the image to be attached.

## Example
```
$sendNotification[Hello, I miss you!;$userAvatar[$botID]]
```

![example](https://i.imgur.com/yfSTLVY.png)
