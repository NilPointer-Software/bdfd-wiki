# $getReactions
Returns a list of users who reacted to a message.

## Syntax
```
$getReactions[Channel ID;Message ID;Separator;Emoji]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel that the message belongs to.
- `Message ID` `(Type: Snowflake || Flag: Required)`: The message to get the user-reactions from.
- `Separator` `(Type: String || Flag: Required)`: The separator between each user.
- `Emoji` `(Type: Emoji || Flag: Required)`: The emoji to get the user's reactions for.

## Example
```
$nomention
$getReactions[2394734883474774;38483494328934989;, ;<:tip:3943484884834848483>]
```

![example](https://user-images.githubusercontent.com/69215413/123293801-488f9980-d4e2-11eb-9a1b-241c4b51f845.png)
