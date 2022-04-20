# $defer
Deferring allows for displaying the "Bot is thinking" message. It's for interaction commands that may take longer than 3 seconds to run, as Discord throws an error if the bot doesn't respond to the interaction within approximately 3 seconds of the interaction being emitted. Generally, this is something that is unneeded; however, it can be useful for arbitrarily long codes or codes that just take a while to run.

> ⚠️ **Warning:** `$defer` can only be used in interaction commands (for [slash command](/src/guides/slashCommands.md) responses or the [`$onInteraction`](/src/callbacks/onInteraction.md) callback).

## Usage
```php
$defer
```

## Example
```
$nomention
$defer
Hello!
$c[Some extended code here...]
````

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*