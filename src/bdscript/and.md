# $and
Returns 'true' if every provided condition is true, otherwise 'false' is returned.

## Usage
```php
$and[conditions;...]
```

## Example
```
$nomention
$if[$and[$username==noituri;$checkContains[$toLowercase[$message];update]==true]==true]
Noit said "Update"!
$endif
```
> 🤔 **Explanation:** The code in the if statement only executes if the user's username is 'noituri', and the message content is 'update'.

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*