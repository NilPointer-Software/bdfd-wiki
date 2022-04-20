# $embedSuppressErrors
Suppresses all non-custom error messages, responds with the embed if there is a error.

## Usage
```php
$embedSuppressErrors[title;description;color;author;footerText;footerIcon]
``` 

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| title | The title of the embed. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)
| description | The embed description. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)
| color | The embed [color hex](https://htmlcolorcodes.com/color-picker). | [Color](/src/resources/arguments/types.md#color) | [Vacantable](/src/resources/arguments/flags.md#vacantable)
| author | The embed author text. | [String](/src/resources/arguments/types.md#string) | [Vacantable](/src/resources/arguments/flags.md#vacantable)
| footerText | The embed footer text. | [String](/src/resources/arguments/types.md#string) | [Vacantable](/src/resources/arguments/flags.md#vacantable)
| footerIcon | The embed footer icon. | [URL](/src/resources/arguments/types.md#url) | [Vacantable](/src/resources/arguments/flags.md#vacantable)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*