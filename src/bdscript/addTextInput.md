# $addTextInput
Adds a new text input to a modal.

## Syntax
```
$addTextInput[text input ID;style;label;(minimum length;maximum length;required?;value;placeholder)]
```
> You can't add more than 5 text input fields.

### Parameters

| Argument         | Description                                                                                                        | Type    | Flag       |
|------------------|--------------------------------------------------------------------------------------------------------------------|---------|------------|
| text input ID    | ID that is used to retrieve the text input in the field. This value must be unique.                                | String  | Required   |
| style            | The text input field style, either `short` or `paragraph`.                                                         | Enum    | Required   |
| label            | Name of the text input field. This value must be less than or equal to 45 characters.                              | String  | Required   |
| minimum length   | Minimum number of characters a user needs to input. This value must be an integer between 0 and 4000, and can't be greater than the `maximum length`.  | Integer | Vacantable |
| maximum length   | Maximum number of characters a user can input. This value must be an integer between 0 and 4000, and can't be less than the `minimum length`.  | Integer | Vacantable |
| required?        | Whether a user must fill in the text input field, defaults to true. (`yes`/`no`)                                   | Bool    | Optional   |
| value            | The text that is written by default in the text input field. This value must be less than or equal to 4000 characters and must not be less than `minimum length` and no more than `maximum length`. | String  | Vacantable |
| placeholder      | The text that is displayed if the text input field is empty. This value must be less than or equal to 100 characters. | String  | Vacantable |



### Styles
- `short` and `paragraph`.

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
