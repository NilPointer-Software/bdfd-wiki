# $addSelectMenuOption
Adds a new select menu option to an existing select menu.

## Syntax
```
$addSelectMenuOption[Menu option ID;Label;Value;Description;(Default?;Emoji;Message ID)]
```

### Parameters
- `Menu option ID` `(Type: String || Flag: Required)`: The ID used in [`$newSelectMenu[]`](./newSelectMenu.md).
- `Label` `(Type: String || Flag: Required)`: The name of the option.
- `Value` `(Type: String || Flag: Required)`: It's the data that gets passed to the `$onInteraction[]` callback. **The value has to be unique in the select menu!**
- `Description` `(Type: String || Flag: Emptiable)`: A text which shows up under the `Label`.
- `Default?` `(Type: Bool || Flag: Vacantable)`: Whether the option should be selected by default or not. (`yes`/`no`) **There can be only one default option!**
- `Emoji` `(Type: Emoji || Flag: Vacantable)`: The emoji that shows up next to the `Label`.
- `Message ID` `(Type: String || Flag: Vacantable)`: The ID of a message that should have a new select menu option added to an existing select menu. By default it's the bot's response.

## Example
```
$nomention
$newSelectMenu[Example;1;1;Choose some option]
$addSelectMenuOption[Example;First;first-option;The first option]
$addSelectMenuOption[Example;Second;second-option;The second option]
$addSelectMenuOption[Example;Third;third-option;The third option]
```
![example](https://user-images.githubusercontent.com/113303649/209933666-9ec8ecfc-e666-4caa-b7cb-b0b3c4cdea02.png)\
![example](https://user-images.githubusercontent.com/113303649/209933373-978c8ade-157f-4991-bb93-929430b4a4eb.png)

> For more info, see the [Select Menu Guide](../guides/general/interactions/selectMenus/aboutSelectMenu.md).
