# $addContainer
Adds a container component to the message.

## Syntax
```
$addContainer[Container name;(Color hex;Spoiler?)]
```

```admonish warning title="Limit"
You can have only 40 containers in one message.
```

### Parameters
- `Container name` `(Type: String || Flag: Required)`: Name for attaching other container elements to container.
```admonish warning
You can't have multiple containers **with the same name** in one message.
```
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