# $awaitReactions
*(for premium bots)*

This function is used to await an reaction command.

## Syntax
```
$awaitReactions[<command name;reaction>;...]
```
## Parameters
- `command name`: It's the name which will be used inside `$reaction[]` callback.
- `reaction`: It awaits the given emoji. Emoji must be either in Unicode or in discord emoji id format.

## Example
```
$nomention
Yes or no?
$awaitReactions[✅;yes;❌;no]
$addReactions[✅;❌]
```

![example](https://user-images.githubusercontent.com/113303649/209927736-3090310a-ddbb-4712-a4c9-83969f7fc3b5.png)

> For more info, see the [Awaited Reactions Guide](../premium/awaitedReactions.md).
