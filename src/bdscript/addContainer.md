# $addContainer
Adds a container body to the message.

## Syntax
```
$addContainer[Container name;(Color hex;Spoiler?)]
```

```admonish warning title="Limit"
A message can have a maximum of 20 container bodies (40 container components).
```

### Parameters
- `Container name` `(Type: String || Flag: Required)`: Name for attaching other container components to container.
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