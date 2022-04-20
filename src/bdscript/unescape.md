# $unescape
Unescapes special characters, e.g. `$`, `[`, `]`, `;`, that have been escaped with `\`.

## Usage
```php
$unescape[text]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| text | The text to unescape. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

## Explanation
Let's say you have the code:
```
$nomention
$textSplit[a,b,c,d,e;,]
```

And you want to generate random text out of the provided values:
```
$nomention
$textSplit[a,b,c,d,e;,]
$randomText[$joinSplitText[;]]
```

This will result in an unexpected output of: `a;b;c;d;e` instead of getting one random value. That is because the semicolons are escaped by `$joinSplitText[]` with `\` (e.g. `\;`).

To fix this issue, we use `$unescape[]`:
```
$nomention
$textSplit[a,b,c,d,e;,]
$randomText[$unescape[$joinSplitText[;]]]
```

Now, we'll get the output of either `a`, `b`, `c`, `d`, or `e` randomly, like intended.

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*