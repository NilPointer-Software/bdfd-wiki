# $try
Starts a try block for [error handling](/src/guides/trycatch.md).

## Usage
```php
$try
$c[some code here]
$endtry
```

## Example
```
$nomention
$try
  $calculate[$noMentionMessage]
$catch
  There was a error while calculating your message '$noMentionMessage'.
  Error: $error[message]
$endtry
```

> **[Click here for more information about error handling](/src/guides/trycatch.md)**

## Specifications
| Scripting Mode | Status
| --- | --- |
| BDScript | ❌ |
| BDScript 2 | ✅ |
| BDScript Unstable | ❌ |

*✅ Supported | ❌ Unsupported*