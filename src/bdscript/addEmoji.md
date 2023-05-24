# $addEmoji
Adds an emoji to the server.

## Syntax
```
$addEmoji[name;image URL;return emoji?]
```

### Parameters

| Argument    | Description                                   | Type | Flag     |
|-------------|-----------------------------------------------|------|----------|
| name        | The name of the new emoji.                     | String | Required |
| image URL   | The image of the new emoji.                    | URL    | Required |
| return emoji? | Whether to show the emoji in the bot's message or not. (`yes`/`no`) | Bool | Required |


## Example
```
$nomention
$argsCheck[>2;Provide all needed arguments! Usage: `!add-emoji (imageURL) (emojiName)`]
Added new emoji: $addEmoji[$replaceText[$message;$message[1];;1];$message[1];yes]
```

![example](https://user-images.githubusercontent.com/113303649/209926846-f957e945-64f8-4e05-b950-9dc20c683850.png)
