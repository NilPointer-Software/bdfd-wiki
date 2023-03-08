# $onInteraction[]
Triggered upon an interaction being emitted (e.g. a button being clicked).

## Syntax
```
$onIneraction[interaction ID]
```

### Parameters
- `interaction ID`: The custom/menu/button/interaction ID used during the creation of buttons, menus, text fields, and other components.

### Supports
- **[Buttons](../guides/buttons.md)**
- **[Select Menu](../guides/selectmenu.md)**
- **[Modals](../guides/modals.md)**

## Example
1. Create two commands and set the trigger `$onInteraction[example]` for one command and `!example` for the other.

- Code with trigger `!example`:
```
$nomention
Click!
$addButton[no;example;Click!;primary]
```
- Code with trigger `$onInteraction[example]`:
```
$nomention
$sendMessage[Hello $username!]
```
2. Execute commands

![example](https://user-images.githubusercontent.com/113303649/223438800-7323f05e-77b5-464e-9385-4f287ba3bcba.png)

> How [`$addButton[]`](../bdscript/addButton.md)  works?
