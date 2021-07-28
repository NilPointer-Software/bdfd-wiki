# $embedSuppressErrors
Suppresses the error messages, responds with the embed if there is a error.

## Usage
```
$embedSuppressErrors[title;description;color;author;footerText;footerIcon]
``` 
> 🧙‍♂️ All fields are optional, leave the field empty to not include it. Atleast one field needs to be inputted, however.

> `$embedSuppressErrors[Error!;There was a error!;;;;]` - this is correct. `$embedSuppressErrors[Error!;There was a error!]` - this is incorrect.

### Breakdown
- `title` - The title of the embed.
- `description` - The embed description.
- `color` - The embed border color, must be a valid [color hex](https://htmlcolorcodes.com/color-picker).
- `author` - The embed author text.
- `footerText` - The embed footer text.
- `footerIcon` - The embed footer icon, must be a valid image URL.
