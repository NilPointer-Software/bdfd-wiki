# $removeAllComponents
Removes all components from a message.

> **Note** : Components are [buttons](../guides/buttons.md) and [select menus](../guides/selectmenu.md).

## Usages
There are two usages of this function :

### Usage #1
#### Syntax
```
$removeAllComponents
```
Removes all components from the current message.

### Usage #2
#### Syntax
```
$removeAllComponents[Message ID]
```
Removes all components from the given message ID.

#### Parameters 
- `Message ID` `(Type: Snowflake || Flag: Required)`: The message from which all components will be removed.

> **Note** : When providing "Message ID", make sure the message author is the bot.
