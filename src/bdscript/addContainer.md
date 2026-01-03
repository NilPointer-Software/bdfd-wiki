# $addContainer
Adds a container component to the message.

## Syntax
```
$addContainer[Container ID;(Color hex;Spoiler?)]
```

### Parameters
- `Container ID` `(Type: String || Flag: Required)`:
- `Color hex` `(Type: Color || Flag: Vacantable)`: The [color hex](https://htmlcolorcodes.com/color-picker) to set the container border color as. You can also use color integer number.
- `Spoiler?` `(Type: Bool || Flag: Optional)`:

## Example
```
$nomention
$addContainer[Container1;#673ab7;false]
```