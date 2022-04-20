# Select Menus
In this article you'll learn how to use the select menu component.\
![demonstration](https://user-images.githubusercontent.com/16838075/124397105-2e3d9300-dd0e-11eb-898e-8cf0228d3cf4.png)
![demonstration with options](https://user-images.githubusercontent.com/16838075/124397186-cc315d80-dd0e-11eb-93d2-3ea8eaa99612.png)


## Creating a Select Menu
```
$newSelectMenu[interactionID;minValues;maxValues;placeholder;messageID (optional)]
```
- `interactionID` - The ID inputted in the `$onInteraction[ID]` callback.
- `minValues` - Minimum amount of values that can be selected.
- `maxValues` - Maximum amount of values that can be selected
- `placeholder` - Text that appears if no option has been selected yet.
- `messageID` - ID of a message that will have the select menu added to it. By default, it's the bot's response.

## Adding an Option to the Select Menu
> **Warning:** Select menu must be created before options get added to it!

```
$addSelectMenuOption[select menu's interactionID;label;value;description;default (yes/no);emoji (can be left empty);messageID (optional)]
```
- `interactionID` - The same interactionID used in `$newSelectMenu`.
- `label` - The name of the option.
- `description` - The option description. Displayed under the `label`.
- `value` - The the data that gets passed to `$onInteraction` callback. The value has to be unique in the select menu!
- `default` - Whether or not the option should be selected by default. There can be only one default option per select menu!
- `emoji` - The emoji which shows up to the left of `label`.
- `messageID` - ID of a message that should have the select menu option added to it. By default, it's the bot's response.

> **Warning:** There can only be 25 options per select menu.

## Further Reading
### $message
In `$onInteraction[]`, `$message` can be used to get which option was chosen. `$message` returns the selected option's `value`.

### Optimization
The code in `$onInteraction[]`'s output is returned by editing the orginal message with the select menu. If you want to return the output in a new message, use a function like [`$sendMessage`](./sendMessage.md) or [`$sendEmbedMessage[]`](./sendEmbedMessage.md).

### Ephermal Responses
If you want the message to be ephemeral (a response which only the author can see), you can use `$ephermal` in the `$onInteraction[]` code. Keep in mind, for ephemeral responses the select menu will stick to the ephemeral message (so the select menu from the original message will be added to the response ephemeral message). You can negate this by using `$removeComponent[interactionID]`. 

## Example
`!menu` code:\
```
$nomention
What's your favorite food?
$newSelectMenu[favFood;0;1;Select a food...]
$addSelectMenuOption[favFood;Pizza;pizza;You think pizza is the best food!;no;]
$addSelectMenuOption[favFood;Burger;burger;You think a burger is the best food!;no;]
$addSelectMenuOption[favFood;Pasta;pasta;You think pasta is the best food!;no;]
```

`$onInteraction[favFood]` code:
```
$nomention
$if[$message==pasta]
Pasta, good choice!
$endif

$if[$message==pizza]
Pizza is yummy!
$endif

$if[$message==burger]
Can't go wrong with a burger!
$endif
```

**Output:**

Before Selecting an Option:

![](https://user-images.githubusercontent.com/69215413/141659644-fcee40f7-69e3-44cb-a85e-69d3f14693ba.png)

While Selecting an Option:

![](https://user-images.githubusercontent.com/69215413/141659643-6381faa3-9679-48ed-b827-f4590ba1b406.png)

After Selecting a Option:
![](https://user-images.githubusercontent.com/69215413/141659639-a3c1a932-62a2-4a7f-b76b-f0d4f8ac20e9.png)