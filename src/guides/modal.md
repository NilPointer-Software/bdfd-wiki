# Modal
In this section you'll learn how to use the modal.

![Screenshot_20220516_023210](https://user-images.githubusercontent.com/95774950/168493667-bc3154ec-3db4-4453-bce5-67d279e400b6.png)

## Creating a modal
`$newModal[modal ID;title]`
- `modal ID` - It is used in `$onInteraction[ID]` callback. It works same way as [buttons](./buttons.md) & [select menus](./selectmenu.md).
- `title` - It's the text which is shown on top of a modal.

## Adding fields in modal
`$addTextInput[text Input ID;style;label;(minimum length;maximum length;required;value;placeholder)]`
- `text Input ID` - It is used for retrieving the text inputted in the text field. It is used in `$input[text input ID]`
- `style` -  There are two types of style : ` short ` & ` paragraph `. (_Check below for style preview_)\
\
![Screenshot_20220516_022516](https://user-images.githubusercontent.com/95774950/168493815-9ab58410-f5ca-48af-baed-0f68aade3bc4.png)

- `label` - The text which is displayed above text input box.
- `minimum length` - Minimum no. of characters an user needs to input. _(You can choose values from 0 to 4000)_
- `maximum length` - Maximum no. of characters an user can type. _(You can choose values from 0 to 4000)_
- `required` - Whether the text field is required. _(Defaults as yes)_
- `value` - Text which is written default in the text field. _(Max 4000 characters)_
- `placeholder` - Text which appears if no text is written in the text field. _(Max 100 characters)_

## Example
Main

```
$nomention
Modal Example
$addButton[no;id;Click me!;primary]
```

Interaction #1 - $onInteraction[id]
```
$nomention
$newModal[modal;User Bio]
$addTextInput[modalInput1;short;What is your name?;3;30;yes;;Mikołaj]
$addTextInput[modalInput2;short;What are your pronouns?;2;30;yes;;He/Him]
$addTextInput[modalInput3;paragraph;Can you tell us about yourself?;5;1000;no;;I am a Developer]
```

Interaction #2 - $onInteraction[modal]
```
$nomention
Name : $input[modalInput1]
Pronouns : $input[modalInput2]
About me : $input[modalInput3]
```
