# $editSelectMenu
Edits a select menu.

## Syntax
```
$editSelectMenu[Menu ID;Min;Max;(Placeholder;Message ID)]
```

### Parameters 
- `Menu ID` `(Type: String || Flag: Required)`: The ID of the select menu you want to edit.
- `Min` `(Type: Integer || Flag: Required)`: The minimum amount of values that can be selected.
- `Max` `(Type: Integer || Flag: Required)`: The maximum amount of values that can be selected.
- `Placeholder` `(Type: String || Flag: Vacantable)`: The text that appears if no option is selected.
- `Message ID` `(Type: Snowflake || Flag: Optional)`: The message for which a select menu will be edited.

## Example
### Interaction Code
```
$editSelectMenu[Example;1;1;Choose some option 😀]
$addSelectMenuOption[Example;First;first-option;The first option]
$addSelectMenuOption[Example;Second;second-option;The second option]
$addSelectMenuOption[Example;Third;third-option;The third option]
```
![Usage](https://user-images.githubusercontent.com/70456337/194151805-879cca9b-e970-4e32-bd70-fb5f9010fd97.png)\
![Usage](https://user-images.githubusercontent.com/70456337/194151852-70c8d754-e6cd-4269-982c-af03c6c3ba3c.png)

> For more info, see the [Select Menu Guide](../guides/general/interactions/selectMenus/aboutSelectMenu.md).
