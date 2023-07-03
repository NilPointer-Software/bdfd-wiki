# $input
Retrieves input from a modal.

## Syntax
```
$input[Text Input ID]
```

## Parameters 
- `Text Input ID` `(Type: String || Flag: Required)`: The input ID in [`$addTextInput[]`](../bdscript/addTextInput.md).

## Example
### Interaction command code
```
$nomention
Name : $input[modalInput1]
Pronouns : $input[modalInput2]
About me : $input[modalInput3]
```
![example](https://user-images.githubusercontent.com/69215413/168921575-9c2e3106-4ac0-4388-8b41-46e640e6126a.png)

> For more info, see the [Modals Guide](../guides/general/interactions/modals/aboutModals.md).
