# $addEmoji
Adds an emoji to the server.

## Usage
```
$addEmoji[name;image URL;return emoji?]
```

## Parameters
- `name`: The name of the new emoji.
- `image URL`: The image that the emoji showcases. This needs to be a valid image URL.
- `return emoji?`: Whether to show the emoji in the bot's message or not. (yes/no)

## Example
```
$nomention
$argsCheck[>2;Provide all needed arguments! Usage: `!add-emoji (imageURL) (emojiName)`]
Added new emoji: $addEmoji[$replaceText[$message;$message[1];;1];$message[1];yes]
```
