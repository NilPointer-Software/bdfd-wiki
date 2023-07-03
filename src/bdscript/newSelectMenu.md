# $newSelectMenu
Adds a select menu to a message.

## Syntax
```
$newSelectMenu[Menu ID;Min;Max;(Placeholder;Message ID)]
```

### Parameters 
- `Menu ID` `(Type: String || Flag: Required)`: The menu ID which is used in the `$onInteraction[]` callback and inside the first argument of `$addSelectMenuOption[]`.
- `Min` `(Type: Integer || Flag: Required)`: The minimum amount of values that can be selected.
- `Max` `(Type: Integer || Flag: Required)`: The maximum amount of values that can be selected.
- `Placeholder` `(Type: String || Flag: Vacantable)`: The text that appears if no option is selected.
- `Message ID` `(Type: Snowflake || Flag: Vacantable)`: The ID of a message that should have a select menu added to it. By default, it's the bot's response.

## Example
```
$nomention
A cool message
$newSelectMenu[Example;1;1;Choose some option]
$addSelectMenuOption[Example;First;first-option;The first option]
$addSelectMenuOption[Example;Second;second-option;The second option]
$addSelectMenuOption[Example;Third;third-option;The third option]
```
![example](https://user-images.githubusercontent.com/111157596/249497589-57ff3a94-a77e-4473-9c32-21b747faacb3.png)

> For more info, see the [Select Menu Guide](../guides/general/interactions/selectMenus/aboutSelectMenu.md).
