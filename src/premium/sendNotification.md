# $sendNotification
<div class="functionTags">
  <span id="PremiumTag">Premium</span>
</div>

Sends a notification to your mobile phone.

```admonish warning title="Limit"
Can be used every 20 minutes.
```

```admonish warning title="Limit"
Only for Android. Can't be used on iOS.
```

## Syntax
```
$sendNotification[Message;(Image URL)]
```

### Parameters 
- `Message` `(Type: String || Flag: Required)`: The text that is displayed in the notification.
- `Image URL` `(Type: String || Flag: Optional)`: The URL for the image to be attached.

## Example
```
$nomention
$sendNotification[Hello world!;$authorAvatar]
```

![example](https://i.imgur.com/yfSTLVY.png)

```admonish question title="What is this?"
How [`$authorAvatar`](../bdscript/authorAvatar.md) works?
```
