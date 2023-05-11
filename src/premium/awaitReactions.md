# $awaitReactions
*(for premium bots)*

This function is used to await a reaction.

## Syntax
```
$awaitReactions[<Command name;Reaction>;...]
```

### Parameters
- `Command name` `(Type: String || Flag: Required)`: The name which will be used inside the `$reaction[]` callback.
- `Reaction` `(Type: Emoji || Flag: Required)`: The reaction to await. The reaction must be either a Unicode Emoji or a Discord custom emoji id.

## Example
```
$nomention
Yes or no?
$awaitReactions[✅;yes;❌;no]
$addReactions[✅;❌]
```

![example](https://user-images.githubusercontent.com/113303649/209927736-3090310a-ddbb-4712-a4c9-83969f7fc3b5.png)

> For more info, see the [Awaited Reactions Guide](../premium/awaitedReactions.md).
