# $newSelectMenu
Add select menu to a message.

## Usage
```
$newSelectMenu[menu ID;min;max;(placeholder;message ID)]

```

## Parameters 
- `menu ID` `(Type: String || Flag: Required)`: Menu ID which is used in the `$onInteraction[]` callback and inside the first argument of `$addSelectMenuOption[]`
- `min` `(Type: Integer || Flag: Required)`: The minimum amount of values that can be selected.
- `max` `(Type: Integer || Flag: Required)`: The maximum amount of values that can be selected.
- `placeholder` `(Type: String || Flag: Vacantable)`: It's a text that appears if no option is selected.
- `message ID` `(Type: Snowflake || Flag: Vacantable)`: ID of a message that should have a select menu added to it. By default, it's the bot's response.

## Example
```
$newSelectMenu[Example;1;1;Choose some option]
$addSelectMenuOption[Example;First;first-option;The first option]
$addSelectMenuOption[Example;Second;second-option;The second option]
$addSelectMenuOption[Example;Third;third-option;The third option]
```

> For more info, see the [Select Menu Guide](../guides/general/interactions/selectMenus/aboutSelectMenu.md).