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

```discord yaml
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  reply:
    user_id: 1009018156494368798
    author: BDFD Support
    mentions: true
    content: "Modal example"
  highlight: true
  content: |
    Name : mrskraba101
    Pronouns : He/Him
    About me : Support in BDFD
  ```

> For more info, see the [Modals Guide](../guides/general/interactions/modals/aboutModals.md).
