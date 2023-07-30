# $and
Returns `true` if every provided condition is true, otherwise `false` is returned.

## Syntax
```
$and[Conditions;...]
```

### Parameters
- `Conditions` `(Type: String || Flag: Required)`: Checks that will be carried out. All conditions must be true for this function to return `true`. Separate conditions using `;`.

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
$and[$nickname==MineBartekSA;$message==Update]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example Update
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    false
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
    false
- user_id: 154148273307910144
  username: MineBartekSA
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/1ecd3b3a-4bdf-441a-98ad-361254426a74
  color: "#f1bdee"
  content: |
    !example Update
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    false
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
    false
  ```

> For more info, see the [If Guide](../guides/ifStatements.md).
