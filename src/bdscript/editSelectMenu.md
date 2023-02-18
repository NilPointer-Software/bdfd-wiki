# $editSelectMenu
Edits select menu.

## Usage
```
$editSelectMenu[menu ID;min;max;(placeholder;message ID)]
```

## Parameters 
- `menu ID` `(Type : String || Flag : Required)` : The menu ID you want to edit
- `min` `(Type: Integer || Flag: Required)`: The minimum amount of values that can be selected.
- `max` `(Type: Integer || Flag: Required)`: The maximum amount of values that can be selected.
- `placeholder` `(Type: String || Flag: Vacantable)`: It's a text that appears if no option is selected.
- `message ID` `(Type: Snowflake || Flag: Optional)`: The message for which a select menu will be edited.

## Example
### Interaction Code
```
$editSelectMenu[Example;1;1;Choose some option 😀]
$addSelectMenuOption[Example;First;first-option;The first option]
$addSelectMenuOption[Example;Second;second-option;The second option]
$addSelectMenuOption[Example;Third;third-option;The third option]
```
![Usage](https://user-images.githubusercontent.com/70456337/194151805-879cca9b-e970-4e32-bd70-fb5f9010fd97.png)
![Usage](https://user-images.githubusercontent.com/70456337/194151852-70c8d754-e6cd-4269-982c-af03c6c3ba3c.png)

> For more info, see the [Select Menu Guide](../guides/selectmenu.md).