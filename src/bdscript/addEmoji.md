# $addEmoji
Adds a emoji to the server.

## Usage
```
$addEmoji[name;URL;return emoji (yes/no)]
```

### Breakdown
`name` - The name of the new emoji.

`URL` - The image that the emoji showcases. This needs to be a valid image URL.

`return emoji` - Whether to show the emoji in the bot's message or not.

## Example
```
$nomention
Added new emoji: $addEmoji[$replaceText[$message;$message[1];;1];$message[1];yes]
$argsCheck[>2;Provide all needed arguments! Usage: `!add-emoji (imageURL) (emojiName)`]
```
> Note: This may require BDScript Unstable mode enabled.
