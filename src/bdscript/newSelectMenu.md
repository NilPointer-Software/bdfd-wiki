# $newSelectMenu
Add select menu to a message.

## Usage
```
$newSelectMenu[Menu ID;Min;Max;(Placeholder;Message ID)]
```

## Example
```
$newSelectMenu[Example;1;1;Choose some option]
$addSelectMenuOption[Example;First;first-option;The first option]
$addSelectMenuOption[Example;Second;second-option;The second option]
$addSelectMenuOption[Example;Third;third-option;The third option]
```

> For more info, see the [Select Menu Guide](../guides/selectmenu.md).