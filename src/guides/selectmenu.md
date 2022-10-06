# Select Menu
In this section you'll learn how to use the select menu component.

![Preview 1](https://user-images.githubusercontent.com/70456337/194143249-eb32bed6-5fc9-4d7b-b88c-65b37dfcbfc9.png)
![Preview 2](https://user-images.githubusercontent.com/70456337/194143111-bf128046-3428-4226-840d-9ea4b0569677.png)

## Creating a Select Menu
```
$newSelectMenu[Menu ID;Min;Max;(Placeholder;Message ID)]
```
- `Menu ID` - it's used for `$onInteraction[ID]` callback. It works the same way as [buttons](./buttons.md).
- `Min` - minimum amount of values that can be selected.
- `Max` - maximum amount of values that can be selected.
- `Placeholder` - it's a text that appears if no option is selected.
- `Message ID` - ID of a message that should have select menu added to it. By default it's the bot's response.

## Adding an Option
```
$addSelectMenuOption[Menu option ID;Label;Value;Description;(Default;Emoji;Message ID)]
```
- `Menu option ID` - it has to be the same as the ID used in `$newSelectMenu[]`.
- `Label` - the name of the option.
- `Value` - it's the data that gets passed to `$onInteraction[]` callback. **The value has to be unique in the select menu!**
- `Description` - it shows up under the `label`.
- `Default` - should the option be selected by default. **There can be only one default option!**
- `Emoji` - it shows up next to the `label`.
- `Message ID` - same as in `$newSelectMenu[]`.

## Example
### Select Menu Code
```
$newSelectMenu[Example;1;1;Choose some option]
$addSelectMenuOption[Example;First;first-option;The first option]
$addSelectMenuOption[Example;Second;second-option;The second option]
$addSelectMenuOption[Example;Third;third-option;The third option]
```
### Interaction Code
> `$onInteraction[Example]`
```
$if[$message==first-option]
You have chosen the first option
$elseif[$message==second-option]
You have chosen the second option
$elseif[$message==third-option]
You have chosen the third option
$endif
```
### Usage
![Usage 1](https://user-images.githubusercontent.com/70456337/194143799-a48e72cb-5947-4657-99d3-d4bafaef5eb5.png)
# Multi-Select Menu
In the Select Menu you can choose not only one option, but several at once.
You could understand this by the presence of arguments `Min` and `Max`.

## Example
### Select Menu Code
> Here we will change the argument `Max` to 3.
```
$newSelectMenu[Example;1;3;Choose some option]
$addSelectMenuOption[Example;First;first-option;The first option]
$addSelectMenuOption[Example;Second;second-option;The second option]
$addSelectMenuOption[Example;Third;third-option;The third option]
```
### Interaction Code
```
$if[$checkContains[$message;first-option]==true]
$addCmdReactions[1️⃣]
$endif

$if[$checkContains[$message;second-option]==true]
$addCmdReactions[2️⃣]
$endif

$if[$checkContains[$message;third-option]==true]
$addCmdReactions[3️⃣]
$endif
```
> If we choose several options, several reactions will be added.
### Usage
![Usage 2.1](https://user-images.githubusercontent.com/70456337/194145414-33fa645f-c3ac-4105-95d9-4edc89fcfae5.png)
![Usage 2.2](https://user-images.githubusercontent.com/70456337/194145159-6c2996f1-7dbc-4fa3-90e0-9a0b8f5c2d9e.png)

# Editing a Select Menu
You can edit Select Menu, as well as options in this menu.
## $editSelectMenu
### Usage
```
$editSelectMenu[Menu ID;Min;Max;(Placeholder;Message ID)]
```
## $editSelectMenuOption
### Usage
```
$editSelectMenuOption[Menu option ID;Label;Value;Description;(Default;Emoji;Message ID)]
```

> As you can notice, the arguments are exactly the same.

## Example
### Select Menu Code
```
$newSelectMenu[Example;1;1;Choose some option]
$addSelectMenuOption[Example;First;first-option;The first option]
$addSelectMenuOption[Example;Second;second-option;The second option]
$addSelectMenuOption[Example;Third;third-option;The third option]
```
### Interaction Code
#### Example 1
```
$editSelectMenuOption[Example;First;first-option;The first option;no;1️⃣]
$editSelectMenuOption[Example;Second;second-option;The second option;no;2️⃣]
$editSelectMenuOption[Example;Third;third-option;The third option;no;3️⃣]
```
![Example 1](https://user-images.githubusercontent.com/70456337/194148923-a25962f8-544d-4744-8a5c-876d9455eaa3.png)
![Example 1](https://user-images.githubusercontent.com/70456337/194149283-42724349-84d1-4d70-b8e6-d4b58e8c365f.png)
![Example 1](https://user-images.githubusercontent.com/70456337/194149485-750c15e8-2a3c-46d0-857b-493178b9468c.png)
> We just added emoji to our options after choosing (any) option.
#### Example 2
```
$editSelectMenu[Example;1;1;Choose some option 😀]
$addSelectMenuOption[Example;First;first-option;The first option]
$addSelectMenuOption[Example;Second;second-option;The second option]
$addSelectMenuOption[Example;Third;third-option;The third option]
```
![Example 2](https://user-images.githubusercontent.com/70456337/194151805-879cca9b-e970-4e32-bd70-fb5f9010fd97.png)
![Example 2](https://user-images.githubusercontent.com/70456337/194151852-70c8d754-e6cd-4269-982c-af03c6c3ba3c.png)
> We just changed the placeholder of our Select Menu after choosing (any) option.
