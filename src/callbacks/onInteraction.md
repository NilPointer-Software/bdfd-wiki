# $onInteraction
Triggered upon an interaction being emitted (e.g. a button being clicked).

## Syntax
```
$onInteraction
```

### Supports
- **[Buttons](../guides/general/interactions/buttons/aboutButtons.md)**
- **[Select Menu](../guides/general/interactions/selectMenus/aboutSelectMenu.md)**
- **[Modals](../guides/general/interactions/modals/aboutModals.md)**
- **[`$customID`](../bdscript/customID.md)**

## Example
```
$nomention
$if[$customID==interaction]
  $sendMessage[Hello!]
$endif

$if[$customID==onlyauthor-$authorID]
  $sendMessage[Hello $username!]
$endif
```

![example](https://user-images.githubusercontent.com/113303649/223423803-2ffadb9e-61b0-432c-bc88-c6850ec564f5.png)\
![example](https://user-images.githubusercontent.com/113303649/223426829-bbeca4d1-2e4c-44ef-a1ae-6458858d0ce0.png)

> How [`$if[]`](../guides/general/ifStatements.md) or [`$customID[]`](../bdscript/customID.md) works?
