# $optOff
`$optOff[]` stands for *optimizations off*. Sometimes BDScript 2 doesn't execute the same function twice and uses the previous result instead. It's similar to BDScript Unstable's [explication prefix](/src/complex-topics/explicationPrefix.md).

## Usage
```php
$optOff[code]
```

## Example
```
$random[1;101]
$optOff[$random[1;101]] $c[Disabled optimization. The random function will return a different number]
$random[1;101] $c[Will return a number like the previous one]
$random[1;101] $c[Will return a number like the previous one]
$optOff[$random[1;101]] $c[Disabled optimization. The random function will return a different number]
$random[1;101] $c[Will return a number like the previous one]
```
![Illustrative example](https://media.discordapp.net/attachments/955104460659642418/966544609993969734/Screenshot_20220421-0642452.png)
## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | :x: |
| BDScript 2 | ✅ |
| BDScript Unstable | :x: |

*✅ Supported | ❌ Unsupported*
