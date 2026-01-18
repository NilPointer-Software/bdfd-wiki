# $addSeparator
<div class="functionTags">
  <span id="ComponentTag">Components v2</span>
</div>

Adds a separator component to [the container body](./addContainer.md) or message.

## Syntax
```
$addSeparator[(Divider?;Spacing type;Container name)]
```

```admonish warning title="Limit"
This function counts as a container component. A message can have a maximum of 40 components.
```

### Parameters
- `Divider?` `(Type: Bool || Flag: Vacantable)`: Should the message show a visual divider?
- `Spacing type` `(Type: Enum || Flag: Vacantable)`: Type of the divider. [Possible types](#spacing-types).
- `Container name` `(Type: String || Flag: Optional)`: The name of [the container body](./addContainer.md) to which the component will be attached. If nothing is specified, it will be attached to the message.

### Spacing Types
- `small`
- `large`

## Example
```
$nomention
$addTextDisplay[Hello world!]
$addSeparator[]
$addTextDisplay[I love BDFD]
$addSeparator[false]
$addTextDisplay[Components v2]
```

```admonish question title="What is this?"
How [`$addTextDisplay[]`](./addTextDisplay.md) works?
```