# $addSection
<div class="functionTags">
  <span id="ComponentTag">Components v2</span>
</div>

Adds a section to the message.

## Syntax
```
$addSection[Section name]
```

```admonish fail title="It's important!"
The section body must contain all [section components](#section-components), otherwise the function will not work!
```

### Parameters
- `Section name` `(Type: String || Flag: Required)`: Name for attaching other section components to the section.
```admonish warning
You can't have multiple sections and [containers](./addContainer.md) **with the same name** in one message. So for example, you can’t have two sections with the name set to `section`.
```

## Section Components
```admonish warning title="Limit" 
Only 3 components can be added to the section.
```

- [`$addTextDisplay[]`](./addTextDisplay.md)
- [`$addThumbnail[]`](./addThumbnail.md)

## Example
```
$nomention
$addSection[section]
$addTextDisplay[Hello world!;section]
$addThumbnail[$authorAvatar;;;section]
```

```admonish question title="What is this?"
How [`$addTextDisplay[]`](./addTextDisplay.md), [`$addThumbnail[]`](./addThumbnail.md) and [`$authorAvatar`](./authorAvatar.md) works?
```