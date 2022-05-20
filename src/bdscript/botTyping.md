# $botTyping
`$botTyping` tells Discord that the bot is typing. When you use a command with `$botTyping` in it, an indicator will be shown; like this:

![](https://user-images.githubusercontent.com/69215413/114784502-4de5a080-9d49-11eb-838d-7a42524a6365.png)


> 🗒️ **Note:** `$botTyping` will make the bot type for 10 seconds, or until the bot sends a message (if that takes under 10 seconds).

## Usage
```php
$botTyping
```

## Example
```
$nomention
$botTyping
Hello World!
```

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*