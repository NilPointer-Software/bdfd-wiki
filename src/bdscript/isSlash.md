# $isSlash
Returns whether the command was ran as a slash command or not. 'true' means the command was ran as a slash command, 'false' means it wasn't.

## Usage
```php
$isSlash
```

## Example
```
$nomention
$if[$isSlash==true]
  $message[text]
$endif

$if[$isSlash==false]
  $message
$endif
```
![](https://user-images.githubusercontent.com/69215413/123517923-b0c0b580-d671-11eb-8e10-ef56a4a5792e.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*