# $onInteraction[]
Triggered upon an interaction being emitted (e.g. a button being clicked).

## Syntax
```
$onIneraction[Interaction ID]
```

### Parameters
- `Interaction ID` `(Type: String || Flag: Required)`: The custom/menu/button/interaction ID used during the creation of buttons, menus, text fields, and other components.

### Supports
- **[Buttons](../guides/general/interactions/buttons/aboutButtons.md)**
- **[Select Menu](../guides/general/interactions/selectMenus/aboutSelectMenu.md)**
- **[Modals](../guides/general/interactions/modals/aboutModals.md)**

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
   ``` discord yaml
   - user_id: 729343563401265193
     username: Nicky
     color: "#EE7908"
     content: |
       !example

   - user_id: 566613317972394004
     username: Wiki Bot
     color: "#748BD4"
     bot: true
     verified: true
     content: |
       Click!
     components:
     -
       - type: primary
         label: Click Me!

   - user_id: 566613317972394004
     username: Wiki Bot
     color: "#748BD4"
     bot: true
     verified: true
     content: |
       Hello Nicky!
   ```
   
> How [`$addButton[]`](../bdscript/addButton.md) works?
