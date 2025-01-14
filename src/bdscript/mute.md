# $mute
<div class="functionTags">
  <span id="DeprecatedTag">Deprecated</span>
</div>

> This function is deprecated, instead better use [`$timeout[]`](https://nilpointer-software.github.io/bdfd-wiki/bdscript/timeout.html).

Mutes the mentioned user.

## Syntax
```
$mute[Muted Role Name]
```

### Parameters
- `Muted Role Name` `(Type: String || Flag: Required)`: The name of the 'Muted' role (case sensitive).

## Example
```
$nomention
$mute[Muted]
✅ Successfully muted $username[$mentioned[1]]#$discriminator[$mentioned[1]]!
```

![example](https://user-images.githubusercontent.com/69215413/123551542-4aef2f00-d740-11eb-82ca-381f5c5efcb3.png)
