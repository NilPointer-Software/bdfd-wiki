# $cropText
Crops the provided text. If text is cropped then the `ending` is added at the end of the text.

## Syntax
```
$cropText[text;max characters;ending]
```

### Parameters
- `text` `(Type: String || Flag: Emptiable)`: The text to crop.
- `max characters` `(Type: Integer || Flag: Required)`: The maximum amount of characters. Subsequent characters are removed.
- `ending` `(Type: String || Flag: Emptiable)`: The text to end the cropped text with (if the text was cropped).

## Example
```
$nomention
$cropText[$noMentionMessage;100;...]
```

![example](https://user-images.githubusercontent.com/69215413/122798403-8d22f700-d28e-11eb-90c5-4473ed43dd62.png)
