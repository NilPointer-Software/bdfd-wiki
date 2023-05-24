# $sendNotification
*(for premium bots)*

Sends a notification to your mobile phone.

## Syntax
```
$sendNotification[Message;(Image URL)]
```

### Parameters 

| Argument   | Description                                          | Type   | Flag     |
|------------|------------------------------------------------------|--------|----------|
| Message    | The text that is displayed in the notification.       | String | Required |
| Image URL  | The URL for the image to be attached.                 | String | Optional |


## Example
```
$sendNotification[Hello, I miss you!;$userAvatar[$botID]]
```

![example](https://i.imgur.com/yfSTLVY.png)
