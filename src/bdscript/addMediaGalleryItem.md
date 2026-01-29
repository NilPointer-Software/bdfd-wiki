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
- `Spoiler?` `(Type: Bool || Flag: Emptiable)`: Will the media have a spoiler effect?

## Example
```
$nomention
$addMediaGallery[pictures]
$addMediaGalleryItem[$authorAvatar;;;pictures]
```

```admonish question title="What is this?"
How [`$addMediaGallery[]`](./addMediaGallery.md) and [`$authorAvatar`](./authorAvatar.md) works?
```