# Select Menu
In this article you'll learn how to use the select menu component.\
![demonstration](https://user-images.githubusercontent.com/16838075/124397105-2e3d9300-dd0e-11eb-898e-8cf0228d3cf4.png)
![demonstration with options](https://user-images.githubusercontent.com/16838075/124397186-cc315d80-dd0e-11eb-93d2-3ea8eaa99612.png)


## Creating a Select Menu
```
$newSelectMenu[customID;minValuesToSelect;maxValuesToSelect;placeholder;messageID (optional)]
```
- `customID` - Used for `$onInteraction[customID]` callback, which defines which code is executed upon one or more option(s) being selected.
- `minValuesToSelect` - Minimum amount of values that can be selected from the menu.
- `maxValuesToSelect` - Maximum amount of values that can be selected from the menu.
- `placeholder` - The text that appears if no value is selected.
- `messageID` - ID of a message that should have the select menu added to it, by default it's the bot's response.

## Adding Select Menu Options
```
$addSelectMenuOption[selectMenuCustomID;label;value;description;default (yes/no);emoji (can be left empty);messageID (optional)]
```
- `selectMenuCustomID` - The custom ID of the select menu this option belongs to.
- `label` - The name of this option.
- `description` - The description of this option.
- `value` - The data that gets passed to [`$onInteraction[]`](./callbacks/onInteraction.md)/[`$onInteraction`](./callbacks/onInteraction.md) callback. **The value has to be unique in the select menu!**
> When used in `$onInteraction[]`/`$onInteraction`, `$message` contains `value`'s data. It can be used to tell which option was selected, that can be later used within a [if statement](./bdscript/ifStatements.md). 
- `default` - Whether the option be selected by default or not. **There can be only one default option per select menu!**
- `emoji` - The emoji shows up next to the `label`, leave the field empty if not needed.
- `messageID` - ID of a message that should have this option added to it, by default it's the bot's response.

## Editing a Select Menu
```
$editSelectMenu[customID;minValuesToSelect;maxValuesToSelect;placeholder;messageID (optional)]
```
- `customID` - Used for `$onInteraction[customID]` callback, which defines which code is executed upon one or more option(s) being selected.
- `minValuesToSelect` - Minimum amount of values that can be selected from the menu.
- `maxValuesToSelect` - Maximum amount of values that can be selected from the menu.
- `placeholder` - The text that appears if no value is selected.
- `messageID` - ID of the message to edit this select menu for, by default it's the bot's response.

## Editing a Select Menu Option
```
$editSelectMenuOption[selectMenuCustomID;label;value;description;default (yes/no);emoji (can be left empty);messageID (optional)]
```
- `selectMenuCustomID` - The custom ID of the select menu this option belongs to.
- `label` - The name of this option.
- `description` - The description of this option.
- `value` - The data that gets passed to [`$onInteraction[]`](./callbacks/onInteraction.md)/[`$onInteraction`](./callbacks/onInteraction.md) callback. **The value has to be unique in the select menu!**
- `default` - Whether the option be selected by default or not. **There can be only one default option per select menu!**
- `emoji` - The emoji shows up next to the `label`, leave the field empty if not needed.
- `messageID` - ID of the message that should have this option edited for, by default it's the bot's response.

## Example
**Select Menu Code:**\
![select menu code](https://user-images.githubusercontent.com/16838075/124397834-92faec80-dd12-11eb-9bed-8fd6ad2fca15.jpg)

**`$onInteraction[]` Code:**\
![interaction code](https://user-images.githubusercontent.com/16838075/124397855-b160e800-dd12-11eb-961c-82b2692f1ea9.jpg)

**Result:**\
Before Using:\
![before using](https://user-images.githubusercontent.com/16838075/124397867-cfc6e380-dd12-11eb-9392-a51a3082f39e.png)\
After Using:\
![after using](https://user-images.githubusercontent.com/16838075/124397887-fe44be80-dd12-11eb-96fb-573e2f94f126.png)
