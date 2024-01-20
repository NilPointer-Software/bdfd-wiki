# $elseif
Checks provided condition only if previous `$if[]` or `$elseif[]` conditions returned false. If the provided condition is true, the following block of code will be executed.

> 🧙‍♂️ Only for **BDScript 2**!

## Syntax
```
$elseif[Condition]
```

### Parameters
- `Condition` `(Type: String || Flag: Required)`: Check that will be carried out.

### Signs
`==` - Equal

`!=` - Not Equal

`<` -  Less Than

`>` - Greater Than

`>=` - Greater Than Or Equal To

`<=` - Less Than Or Equal To
- These signs could vary in meaning based on the order or intent of the if statement.
- If you are using text as your `x` and/or `y`, you can not use any other signs besides `==` and `!=`. However for numbers, you can use any sign shown in the above list.

## Example
```
$nomention
$if[$authorID==$botOwnerID]
  $sendMessage[Developer]
$elseif[$authorID==$serverOwner]
  $sendMessage[Server Owner]
$endif
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Developer
- user_id: 154148273307910144
  username: MineBartekSA
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/1ecd3b3a-4bdf-441a-98ad-361254426a74
  color: "#f1bdee"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Server Owner
  ```
  \

> For more info, see the [If Guide](../guides/ifStatements.md).
