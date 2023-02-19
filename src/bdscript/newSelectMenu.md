# $newSelectMenu
Add select menu to a message.

## Usage
```
$newSelectMenu[menu ID;min;max;(placeholder;message ID)]

```

## Parameters 
- `Menu ID` `(Type : String || Flag : Required)` : menu ID which will be used ine the `$onInteraction[]` callback and inside the first argument of `$addSelectMenuOption[]`
- `Min` `(Type : Integer || Flag : Required)` : minimum amount of values that can be selected.
- `Max` `(Type : Integer || Flag : Required)` : maximum amount of values that can be selected.
- `Placeholder` `(Type : String || Flag : Vacantable)` : it's a text that appears if no option is selected.
- `Message ID` `(Type : Snowflake || Flag : Vacantable)` : ID of a message that should have select menu added to it. By default it's the bot's response. 

## Example
```
$newSelectMenu[Example;1;1;Choose some option]
$addSelectMenuOption[Example;First;first-option;The first option]
$addSelectMenuOption[Example;Second;second-option;The second option]
$addSelectMenuOption[Example;Third;third-option;The third option]
```

> For more info, see the [Select Menu Guide](../guides/selectmenu.md).