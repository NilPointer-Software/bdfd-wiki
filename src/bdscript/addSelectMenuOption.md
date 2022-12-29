# $addSelectMenuOption
Adds select menu option to a select menu.

## Syntax
```
$addSelectMenuOption[menu option ID;label;value;description;(default?;emoji;message ID)]
```
## Parameters
- `menu option ID`: The ID used in `$newSelectMenu[]`.
- `label`: The name of the option.
- `value`: It's the data that gets passed to `$onInteraction[]` callback. **The value has to be unique in the select menu!**
- `description`: It shows up under the `label`.
- `default?`: Should the option be selected by default. (yes/no) **There can be only one default option!**
- `emoji`: It shows up next to the `label`.
- `message ID`: ID of a message that should have select menu added to it. By default it's the bot's response.

## Example
```
$newSelectMenu[Example;1;1;Choose some option]
$addSelectMenuOption[Example;First;first-option;The first option]
$addSelectMenuOption[Example;Second;second-option;The second option]
$addSelectMenuOption[Example;Third;third-option;The third option]
```

![example](https://user-images.githubusercontent.com/113303649/209933666-9ec8ecfc-e666-4caa-b7cb-b0b3c4cdea02.png)


![example](https://user-images.githubusercontent.com/113303649/209933373-978c8ade-157f-4991-bb93-929430b4a4eb.png)



> For more info, see the [Select Menu Guide](../guides/selectmenu.md).
