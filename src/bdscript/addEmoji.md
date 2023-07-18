# $addEmoji
Adds an emoji to the server.

## Syntax
```
$addEmoji[Name;Image URL;Return emoji?]
```

### Parameters
- `Name` `(Type: String || Flag: Required)`: The name of the new emoji.
- `Image URL` `(Type: URL || Flag: Required)`: The image of the new emoji. The link needs to be a valid image URL.
- `Return emoji?` `(Type: Bool || Flag: Required)`: Whether to show the emoji in the bot's message or not. (`yes`/`no`)

## Example
```
$nomention
$argsCheck[>2;Provide all needed arguments! Usage: `!add-emoji (imageURL) (emojiName)`]
Added new emoji: $addEmoji[$replaceText[$message;$message[1];;1];$message[1];yes]
```
![example](https://user-images.githubusercontent.com/113303649/209926846-f957e945-64f8-4e05-b950-9dc20c683850.png)
