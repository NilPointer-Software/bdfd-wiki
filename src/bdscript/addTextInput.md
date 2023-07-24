# $addTextInput
Adds a new text input field to a modal.

## Syntax
```
$addTextInput[Text input ID;Style;Label;(Minimum length;Maximum length;Required?;Value;Placeholder)]
```

> 📌 You can add up to 5 text input fields to a modal.

### Parameters
- `Text input ID` `(Type: String || Flag: Required)`: The ID that is used to retrieve the text input in the field. **This value must be unique!**
- `Style` `(Type: Enum || Flag: Required)`: The text input field style, either `short` or `paragraph`.
- `Label` `(Type: String || Flag: Required)`: The name of the text input field. This value must be less than or equal to 45 characters.
- `Minimum length` `(Type: Integer || Flag: Vacantable)`: Minimum number of characters a user needs to input. This value must be an integer between 0 and 4000, and can't be greater than the `Maximum length`.
- `Maximum length` `(Type: Integer || Flag: Vacantable)`: Maximum number of characters a user can input. This value must be an integer between 0 and 4000, and can't be less than the `Minimum length`.  
- `Required?` `(Type: Bool || Flag: Optional)`: Whether a user must fill in the text input field or not. Defaults to `yes`. (`yes`/`no`)
- `Value` `(Type: String || Flag: Vacantable)`: The text that is written by default in the text input field. This value must be less than or equal to 4000 characters and must not be less than `Minimum length` and no more than `Maximum length`.
- `Placeholder` `(Type: String || Flag: Vacantable)`: The text that is displayed if the text input field is empty. This value must be less than or equal to 100 characters.

### Styles
- `short` - A small text input field.
- `paragraph` - A big text input field.

![styles](https://user-images.githubusercontent.com/113303649/209936324-5a9f1d2b-8eea-48d4-b3cb-749a6d68c2d2.png)


## Example
```
$nomention
$newModal[modal;User Bio]
$addTextInput[modalInput1;short;What is your name?;3;30;yes;;Mikołaj]
$addTextInput[modalInput2;short;What are your pronouns?;2;30;yes;;He/Him]
$addTextInput[modalInput3;paragraph;Can you tell us about yourself?;5;1000;no;;I am a Developer]
```
![example](https://user-images.githubusercontent.com/113303649/209936030-02352d16-a81f-486f-aa32-839c82f4fa6d.png)

> For more info, see the [Modals Guide](../guides/general/interactions/modals/aboutModals.md).
