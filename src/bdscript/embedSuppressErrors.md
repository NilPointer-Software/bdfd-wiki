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

## Examples
### Example #1
```
$nomention
$embedSuppressErrors[Error!;❌ Invalid math expression!;#ff0000;;Calculator]

Result: **$calculate[$message]**
```
![example](https://github.com/caramellya-mei/bdfd-wiki/assets/115384748/739e2996-62b2-43ad-8c93-783bf4adccce)

### Example #2
You can pass error from limiter functions into the embed by leaving the `Description` argument to be empty.
```
$nomention
$embedSuppressErrors[Error!;;#ff0000]
$argsCheck[>1;You must type at least one word]

You typed "$message"
```
![example_2](https://github.com/caramellya-mei/bdfd-wiki/assets/115384748/f8bb4e3b-e87e-4d9e-83ce-f480363ea924)
