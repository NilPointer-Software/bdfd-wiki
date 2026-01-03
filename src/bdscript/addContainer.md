# $addContainer
Adds a container body to the message.

## Syntax
```
$addContainer[Container name;(Color hex;Spoiler?)]
```

```admonish warning title="Limit"
A message can have a maximum of 20 container bodies (40 container components).
```

```admonish fail title="It's important!"
The container body must contain [container components](#container-components), otherwise the function will not work!
```

### Parameters
- `Container name` `(Type: String || Flag: Required)`: Name for attaching other container components to the container body.
```admonish warning
You can't have multiple containers **with the same name** in one message. So for example, you can’t have two containers with the name set to `Container1`.
```

- `Color hex` `(Type: Color || Flag: Vacantable)`: The [color hex](https://htmlcolorcodes.com/color-picker) to set the container border color as. You can also use color integer number.
- `Spoiler?` `(Type: Bool || Flag: Optional)`: Will the container have a spoiler effect?

## Container Components
- [`$addTextDisplay[]`](./addTextDisplay.md)
- `$addSeparator[]`

## Example
```
$nomention
$addContainer[Container1;#673ab7;false]
$addTextDisplay[Hello world!;Container1]
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: <none>
  embed:
    description: Hello world!
    color: "#673ab7"
```

```admonish question title="What is this?"
How [`$addTextDisplay[]`](./addTextDisplay.md) works?
```