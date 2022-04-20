# $optOff
`$optOff[]` stands for *optimizations off*. Sometimes BDScript 2 doesn't execute the same function twice and uses the previous result instead. It's similar to BDScript Unstable's [explication prefix](/src/complex-topics/explicationPrefix.md).

## Usage
```php
$optOff[code]
```

## Example
```
$random $c[returns 3]
$random $c[returns 3]
$random $c[returns 3]
$optOff[$random] $c[returns 1]
$random $c[returns 1]
$random $c[returns 1]
```

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*