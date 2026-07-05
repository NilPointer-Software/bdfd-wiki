# $addMediaGallery
<div class="functionTags">
  <span id="ComponentTag">Components v2</span>
</div>

Adds a media gallery to the message.

## Syntax
```
$addMediaGallery[Gallery name;(Container name)]
```

### Parameters
- `Gallery name` `(Type: String || Flag: Required)`: Name for attaching pictures to the gallery.
- `Container name` `(Type: String || Flag: Optional)`: To which [container body](./addContainer.md) should the gallery be attached.

## Example
```
$nomention
$addMediaGallery[pictures]
$addMediaGalleryItem[$authorAvatar;;;pictures]
```

```admonish question title="What is this?"
How [`$addMediaGalleryItem[]`](./addMediaGalleryItem.md) and [`$authorAvatar`](./authorAvatar.md) works?
```