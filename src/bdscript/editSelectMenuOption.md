# $editSelectMenuOption
Edits a select menu option.

## Syntax
```
$editSelectMenuOption[Menu option ID;Label;Value;Description;(Default;Emoji;Message ID)]
```

### Parameters 
- `Menu option ID` `(Type: String || Flag: Required)`: The select menu ID. It has to be the same as the ID used in its `$newSelectMenu[]`.
- `Label` `(Type: String || Flag: Required)`: The name of the option.
- `Value` `(Type: String || Flag: Required)`: The value of the option. It's the data that gets passed to the `$onInteraction[]` callback. **The value has to be unique in the select menu!**
- `Description` `(Type: String || Flag: Vacantable)`: The description of the option. It shows up under the `Label`.
- `Default` `(Type: Bool || Flag: Vacantable)`: Decide if the option should be selected by default. **There can be only one default option!**
- `Emoji` `(Type: Emoji || Flag: Vacantable)`: The emoji of the option. It shows up next to the `Label`.
- `Message ID` `(Type: Snowflake || Flag: Optional)`: The message ID, menu attached to it.

## Example
### Interaction Code
```
$editSelectMenuOption[Example;First;first-option;The first option;no;1️⃣]
$editSelectMenuOption[Example;Second;second-option;The second option;no;2️⃣]
$editSelectMenuOption[Example;Third;third-option;The third option;no;3️⃣]
```
![example1](https://user-images.githubusercontent.com/70456337/194148923-a25962f8-544d-4744-8a5c-876d9455eaa3.png)

### Output
**Before**

![example2](https://user-images.githubusercontent.com/70456337/194149283-42724349-84d1-4d70-b8e6-d4b58e8c365f.png)

**After**

![example3](https://user-images.githubusercontent.com/70456337/194149485-750c15e8-2a3c-46d0-857b-493178b9468c.png)

> For more info, see the [Select Menu Guide](../guides/general/interactions/selectMenus/aboutSelectMenu.md).
