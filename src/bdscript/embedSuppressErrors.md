# $embedSuppressErrors
Suppresses the error messages, responds with the embed if there is an error.

## Syntax
```
$embedSuppressErrors[Title;Description;(Color;Author;Footer;Footer icon)]
```

> 🧙‍♂️ All fields are optional, leave the field empty to not include it. At least one field needs to be inputted, however.

### Parameters
- `Title` `(Type: String || Flag: Emptiable)`: The title of the embed.
- `Description` `(Type: String || Flag: Emptiable)`: The embed description.
- `Color` `(Type: Color || Flag: Vacantable)`: The embed border color, must be a valid [color hex](https://htmlcolorcodes.com/color-picker).
- `Author` `(Type: String || Flag: Vacantable)`: The embed author text.
- `Footer` `(Type: String || Flag: Vacantable)`: The embed footer text.
- `Footer icon` `(Type: URL || Flag: Vacantable)`: The embed footer icon, must be a valid image URL.

## Example
```
$nomention
$embedSuppressErrors[Error!;❌ Invalid math expression!;#ff0000;;Calculator]

Result: **$calculate[$message]**
```
