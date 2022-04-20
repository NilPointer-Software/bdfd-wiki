# $catch
Catches the error from [`$try`](./try.md), for [error handling](/src/guides/trycatch.md).

## Usage
```php
$try
$c[code to execute when no error]

$catch
$c[code to execute when error]
$endtry
```

> 🧠 **Tip:** [`$error[]`](./error.md) can be used within the `$catch` block.

> [Click here for more information about error handling](/src/guides/trycatch.md)

## Specifications
| Scripting Mode | Status
| --- | --- |
| BDScript | ❌ |
| BDScript 2 | ✅ |
| BDScript Unstable | ❌ |

*✅ Supported | ❌ Unsupported*