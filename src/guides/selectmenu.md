# Select Menu
In this section you'll learn how to use the select menu component.\
![demonstration](https://user-images.githubusercontent.com/16838075/124397105-2e3d9300-dd0e-11eb-898e-8cf0228d3cf4.png)
![demonstration with options](https://user-images.githubusercontent.com/16838075/124397186-cc315d80-dd0e-11eb-93d2-3ea8eaa99612.png)


## Creating a new select menu
`$newSelectMenu[interaction ID;min values to select;max values to select;placeholder;messageID(optional)]`
- `interaction ID` - it's used for `$onInteraction[ID]` callback. It works the same way as [buttons](./buttons.md)
- `min values to select` - minimum amount of values that can be selected
- `max values to select` - maximum amount of values that can be selected
- `placeholder` - it's a text that appears if no value is selected
- `messageID(optional)` - ID of a message that should have select menu added to it. By default it's the bot's response.

## Adding an option to select menu
`$addSelectMenuOption[select menu's interaction ID;label;value;description;default (yes/no);emoji (can be left empty);messageID (optional)]`
- `select menu's interaction ID` - it has to be the same as the ID used in `$newSelectMenu[]`
- `label` - the name of the option
- `value` - it's the data that gets passed to `$onInteraction[]` callback. **The value has to be unique in the select menu!**
- `description` - it shows up under the `label`
- `default (yes/no)` - should the option be selected by default. **There can be only one default option!**
- `emoji` - it shows up next to the `label`
- `messageID (optional)` - same as in `$newSelectMenu[]`

## Example
Select Menu code:\
![select menu code](https://user-images.githubusercontent.com/16838075/124397834-92faec80-dd12-11eb-9bed-8fd6ad2fca15.jpg)

Interaction code:\
![interaction code](https://user-images.githubusercontent.com/16838075/124397855-b160e800-dd12-11eb-961c-82b2692f1ea9.jpg)

Usage:\
![before using](https://user-images.githubusercontent.com/16838075/124397867-cfc6e380-dd12-11eb-9392-a51a3082f39e.png)
![after using](https://user-images.githubusercontent.com/16838075/124397887-fe44be80-dd12-11eb-96fb-573e2f94f126.png)

