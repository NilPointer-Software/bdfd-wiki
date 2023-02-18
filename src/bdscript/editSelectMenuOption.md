# $editSelectMenuOption
Edits select menu.

## Usage
```
$editSelectMenuOption[menu option ID;label;value;description;(default;emoji;message ID)]
```
## Parameters 
- `menu option ID` `(Type: String || Flag: Required)`: it has to be the same as the ID used in its `$newSelectMenu[]`.
- `label` `(Type: String || Flag: Required)`: the name of the option.
- `value` `(Type: String || Flag: Required)`: it's the data that gets passed to the `$onInteraction[]` callback. **The value has to be unique in the select menu!**
- `description` `(Type: String || Flag: Vacantable)`: it shows up under the `label`.
- `default` `(Type: Bool || Flag: Vacantable)`: should the option be selected by default. **There can be only one default option!**
- `emoji` `(Type: Emoji || Flag: Vacantable)`: it shows up next to the `label`.
- `message ID` `(Type: Snowflake || Flag: Optional)`: the message id, menu attached to it.

## Example
### Interaction Code
```
$editSelectMenuOption[Example;First;first-option;The first option;no;1️⃣]
$editSelectMenuOption[Example;Second;second-option;The second option;no;2️⃣]
$editSelectMenuOption[Example;Third;third-option;The third option;no;3️⃣]
```
![Example 1](https://user-images.githubusercontent.com/70456337/194148923-a25962f8-544d-4744-8a5c-876d9455eaa3.png)
![Example 1](https://user-images.githubusercontent.com/70456337/194149283-42724349-84d1-4d70-b8e6-d4b58e8c365f.png)
![Example 1](https://user-images.githubusercontent.com/70456337/194149485-750c15e8-2a3c-46d0-857b-493178b9468c.png)

> For more info, see the [Select Menu Guide](../guides/selectmenu.md).