# $editSelectMenu
Edits select menu.

## Usage
```
$editSelectMenu[menu ID;min;max;(placeholder;message ID)]
```

## Parameters 
- `Menu ID` `(Type : String || Flag : Required)` : the menu ID you want to edit
- `Min` `(Type : Integer || Flag : Required)` : minimum amount of values that can be selected.
- `Max` `(Type : Integer || Flag : Required)` : maximum amount of values that can be selected.
- `Placeholder` `(Type : String || Flag : Vacantable)` : it's a text that appears if no option is selected.

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