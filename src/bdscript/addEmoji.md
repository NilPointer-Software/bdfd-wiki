# $addEmoji
Adds a emoji to the server.
> Bot must have the `MANAGE_EMOJIS` permission!

## Usage
```
$addEmoji[name;imageURL;returnEmoji (yes/no)]
```

### Breakdown
- `name` - The name of the new emoji.
- `imageURL` - The image that the emoji showcases. This needs to be a valid image URL.
- `returnEmoji` - Whether to show the emoji in the bot's message or not.

## Example
```
$nomention
Added new emoji: $addEmoji[$replaceText[$message;$message[1];;1];$message[1];yes]
$argsCheck[>2;Provide all needed arguments! Usage: `!add-emoji (imageURL) (emojiName)`]
$onlyBotPerms[manageemojis;I need the manage emojis permission!]
$onlyPerms[manageemojis;You need the manage emojis permission!]
```
> 🧙‍♂️ This example may require BDScript Unstable mode enabled.
