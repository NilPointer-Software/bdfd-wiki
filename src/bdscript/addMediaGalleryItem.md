# $addMediaGalleryItem
<div class="functionTags">
  <span id="ComponentTag">Components v2</span>
</div>

Adds a media to the gallery.

## Syntax
```
$addMediaGalleryItem[Media URL;Description;Spoiler?;(Gallery name)]
```

```admonish warning title="Limit"
You can add up to 10 media items to the 1 media.
```

### Parameters
- `Media URL` `(Type: URL || Flag: Required)`: URL of the media (image or video).
- `Description` `(Type: String || Flag: Emptiable)`: Alt text for the media item.
- `Spoiler?` `(Type: Bool || Flag: Emptiable)`: Will the media have a spoiler effect?
- `Gallery name` `(Type: String || Flag: Required)`: Name of the media gallery to add item to.

## Example
```
$nomention
$addMediaGallery[pictures]
$addMediaGalleryItem[$authorAvatar;;;pictures]
```

```admonish question title="What is this?"
How [`$addMediaGallery[]`](./addMediaGallery.md) and [`$authorAvatar`](./authorAvatar.md) works?
```