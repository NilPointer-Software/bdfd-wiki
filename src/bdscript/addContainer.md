# $addContainer
Adds a container component to the message.

## Syntax
```
$addContainer[Container ID;(Color hex;Spoiler?)]
```

### Parameters
- `Container ID` `(Type: String || Flag: Required)`: Main ID for attaching other container elements to container.
- `Color hex` `(Type: Color || Flag: Vacantable)`: The [color hex](https://htmlcolorcodes.com/color-picker) to set the container border color as. You can also use color integer number.
- `Spoiler?` `(Type: Bool || Flag: Optional)`: Will the container have a spoiler effect?

## Example
```
$nomention
$addContainer[Container1;#673ab7;false]
$addTextDisplay[Hello world!;Container1]
```

```admonish question title="What is this?"
How [`$addTextDisplay[]`](./addTextDisplay.md) works?
```