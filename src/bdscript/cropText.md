# $cropText
Crops the provided text. If text is cropped then the `ending` is added at the end of the text.

## Usage
```
$cropText[text;maxCharacters;ending]
```

### Breakdown
`text` - The text to crop.

`maxCharacters` - The maxmium amount of characters, subsequent characters are removed.

`ending` - The text to end the cropped-text with (if the text was cropped).

## Example
```
$nomention
$cropText[$noMentionMessage;100;...]
```

![Example](https://user-images.githubusercontent.com/69215413/122798403-8d22f700-d28e-11eb-90c5-4473ed43dd62.png)
