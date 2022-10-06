# Modals
In this section, you'll learn how to use the modal message component.

![](https://imgur.com/XUbUhdG.png)

> ⚠️ **Warning:** Modals are only supported for interaction responses  (like slash commands, buttons, select menus, etc), you can't open a modal from just a message command.

## Creating a Modal
```
$newModal[Modal ID;Title]
```

- `Modal ID` - Used in `$onInteraction[ID]` callback. It works same way as [buttons](./buttons.md) and [select menus](./selectmenu.md).
- `Title` - The text which is displayed on top of a modal. This value must be less than or equal to 45 characters.

## Adding Input Fields
```
$addTextInput[Text Input ID;Style;Label;(Minimum length;Maximum length;Required;Value;Placeholder)]
```

- `Text Input ID` - ID that is used to retrieve the text input in the field. This value must be unique. _(Used in [`$input[Text Input ID]`](#getting-input-from-a-modal-submission))_
- `Style` - The text input field style, either `short` or `paragraph`.
  \
  ![](https://user-images.githubusercontent.com/95774950/168493815-9ab58410-f5ca-48af-baed-0f68aade3bc4.png)
- `Label` - Name of the text input field. This value must be less than or equal to 45 characters.
- `Minimum length` - Minimum number of characters a user needs to input. This value must be an integer between 0 and 4000, and can't be greater than the `Maximum length`.
- `Maximum length` - Maximum number of characters a user can input. This value must be an integer between 0 and 4000, and can't be less than the `Minimum length`.  
- `Required` - Whether a user must fill in the text input field, defaults to true.
- `Value` - The text that is written by default in the text input field. This value must be less than or equal to 4000 characters and must not be less than `Minimum length` and no more than `Maximum length`.
- `Placeholder` - The text that is displayed if the text input field is empty. This value must be less than or equal to 100 characters.

> 🧙‍♂️ **Note:** You can't add more than 5 text input fields.

## Getting Input from a Modal Submission
_Use this function in response to the modal submission interaction:_
```
$input[Text Input ID]
```

- `Text Input ID` - The text input field to get the user's input from.

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
$addTextInput[modalInput1;short;What is your name?;3;30;yes;;Mikołaj]
$addTextInput[modalInput2;short;What are your pronouns?;2;30;yes;;He/Him]
$addTextInput[modalInput3;paragraph;Can you tell us about yourself?;5;1000;no;;I am a Developer]
```

> 🤔 **Explanation:** The code above executes when the [button](./buttons.md) from the previous code gets clicked. So, when the user clicks the button the modal appears.

Command Trigger: `$onInteraction[modal]` | Command Code:

```
$nomention
Name : $input[modalInput1]
Pronouns : $input[modalInput2]
About me : $input[modalInput3]
```

> 🤔 **Explanation:** The code above executes when the modal is submitted, because in the previous command we inputted the custom ID 'modal' into the `$newModal[]` function: `$newModal[modal;User Bio]`.

### Result

![](https://user-images.githubusercontent.com/69215413/168921581-24738366-8a3d-4de3-8398-34ea562501ce.png)

![](https://imgur.com/0Vd3Ipq.png)

![](https://user-images.githubusercontent.com/69215413/168921575-9c2e3106-4ac0-4388-8b41-46e640e6126a.png)
