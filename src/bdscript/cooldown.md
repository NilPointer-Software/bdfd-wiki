# $cooldown
Sets a cooldown. The user cannot run the command again in the current server, until the 'duration' is up.
> 🧠 **Tip:** To make a cooldown global, use [`$globalCooldown[]`](./globalCooldown.md).

## Usage
```php
$cooldown[duration;errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| duration | The duration of this cooldown (e.g `30s`, `3m`, `3h`, `3d`, etc) | [Duration](/src/resources/arguments/types.md#duration) | [Required](/src/resources/arguments/flags.md#required)
| errorMessage |  Message when the cooldown duration is still ongoing. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)
> 🛠 **Tip:** `%time%` returns how much time is left on the cooldown, it can be used in the `errorMessage` argument.

## Example
```
$nomention
Hi!
$cooldown[30s;Please wait %time%, then use that command again!]
```
![](https://user-images.githubusercontent.com/69215413/147580615-cb429c39-f2b0-43c0-bf53-66a1b3aeef75.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*