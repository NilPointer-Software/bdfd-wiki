# $awaitReactions
*(for premium bots)*

This function is used to await a reaction.

## Syntax
```
$awaitReactions[<Command name;Reaction>;...]
```

### Parameters

| Argument       | Description                                                                                      | Type    | Flag     |
|----------------|--------------------------------------------------------------------------------------------------|---------|----------|
| Command name   | It's the name which will be used inside the `$reaction[]` callback.                              | String  | Required |
| Reaction       | It awaits the given emoji. Emoji must be either in Unicode or in Discord emoji ID format.        | Emoji   | Required |

## Example
```
$nomention
Yes or no?
$awaitReactions[✅;yes;❌;no]
$addReactions[✅;❌]
```

![example](https://user-images.githubusercontent.com/113303649/209927736-3090310a-ddbb-4712-a4c9-83969f7fc3b5.png)

> For more info, see the [Awaited Reactions Guide](../premium/awaitedReactions.md).
