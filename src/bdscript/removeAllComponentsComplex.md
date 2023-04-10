# $removeAllComponents[]
Removes all components from a message.

> **Note** : Components are [buttons](../guides/buttons.md) and [select menus](../guides/selectmenu.md).

## Syntax
```
$removeAllComponents[Message ID]
```

### Parameters
- `Message ID` `(Type: Snowflake || Flag: Required)`: The message from which all components will be removed.

## Example
```
$nomention
$removeAllComponents[1093603455320457307]
```

> **Note** : When providing "Message ID", make sure the message author is the bot.
