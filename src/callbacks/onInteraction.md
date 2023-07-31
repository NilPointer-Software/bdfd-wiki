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
    Click
  components:
  -
    - type: primary
      label: Interaction ID&colon; interaction

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Hello!

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
    Click
  components:
  -
    - type: primary
      label: Interaction ID&colon; onlyauthor-$authorID

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Hello Nicky!
```
``` discord yaml
- user_id: 154148273307910144
  username: MineBartekSA
  color: "#F1BDEE"
  content: |
    !example

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Click
  components:
  -
    - type: primary
      label: Interaction ID&colon; onlyauthor-$authorID

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Hello MineBartekSA!

- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    I can't use the button
```

> How [`$if[]`](../guides/general/ifStatements.md) or [`$customID[]`](../bdscript/customID.md) works?
