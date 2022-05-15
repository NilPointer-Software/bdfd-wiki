# Modal

In this section, you'll learn how to use the modal message component.

![](https://imgur.com/XUbUhdG.png)

## Creating a Modal

`$newModal[modalID;title]`

- `modalID` - Used in `$onInteraction[ID]` callback. It works same way as [buttons](./buttons.md) and [select menus](./selectmenu.md).
- `title` - The text which is displayed on top of a modal.

## Adding Input Fields in the Modal

`$addTextInput[textInputID;style;label;(minimumLength;maximumLength;required;value;placeholder)]`

- `textInputID` - ID that is used to retrieve the text input in the text field. This value should be unique. _(Used in `$input[textInputID]` for retrieving input)_
- `style` - The modal style, either `short ` or `paragraph`. _(Check below for style preview)_\
  \
  ![](https://user-images.githubusercontent.com/95774950/168493815-9ab58410-f5ca-48af-baed-0f68aade3bc4.png)

- `label` - The content of the label which is displayed above the text input box.
- `minimumLength` - Minimum number of characters a user needs to input. This value must be an integer between 0 and 4000, and cannot be greater than the `maximum length`.
- `maximumLength` - Maximum number of characters a user can input. This value must be an integer between 0 and 4000, and cannot be less than the `minimum length`.  
  `required` - Whether the text field is required, defaults to true.
- `value` - Text that's shown by default in the text field. This value should be less than 4000 characters.
- `placeholder` - Text which appears if no text is written in the text field. This value should be less than 100 characters.

## Example

Command Trigger: `!modal` | Command Code:

```
$nomention
Modal Example
$addButton[no;bio;Click me!;primary]
```

Command Trigger: `$onInteraction[bio]` | Command Code:

```
$nomention
$newModal[modal;User Bio]
$addTextInput[modalInput1;short;What is your name?;3;30;yes;;MikoÅ‚aj]
$addTextInput[modalInput2;short;What are your pronouns?;2;30;yes;;He/Him]
$addTextInput[modalInput3;paragraph;Can you tell us about yourself?;5;1000;no;;I am a Developer]
```

Command Trigger: `$onInteraction[modal]` | Command Code:

```
$nomention
Name : $input[modalInput1]
Pronouns : $input[modalInput2]
About me : $input[modalInput3]
```

### Result

![](https://imgur.com/0Vd3Ipq.png)

![](https://imgur.com/IbRWWlY.png)
