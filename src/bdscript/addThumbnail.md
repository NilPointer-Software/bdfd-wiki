# $addThumbnail
<div class="functionTags">
  <span id="ComponentTag">Components v2</span>
</div>

Adds a thumbnail component to [the section](./addSection.md).

## Syntax
```
$addThumbnail[Image URL;Image description;Spoiler?;Section name]
```

```admonish warning title="Limit"
This function counts as a component. A message can have a maximum of 40 components.
You can't add more than 3 components to [a section](./addSection.md).
```

### Parameters
- `Image URL` `(Type: URL || Flag: Required)`: URL of the thumbnail image.
- `Image description` `(Type: String || Flag: Emptiable)`: Alt text description for the image.
- `Spoiler?` `(Type: Bool || Flag: Emptiable)`: Will the image have a spoiler effect?
- `Section name` `(Type: String || Flag: Required)`: The name of [the section](./addSection.md) to which the component will be attached.

## Example
```
$nomention
$addSection[Section]
$addTextDisplay[Hallow world!;Section]
$addThumbnail[$authorAvatar;My avatar;;Section]
```

```admonish question title="What is this?"
How [`$addSection[]`](./addSection.md), [`$authorAvatar`](./authorAvatar.md) and [`$addTextDisplay[]`](./addTextDisplay.md) works?
```