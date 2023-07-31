# $argsCheck
When this function is used, the command can only be executed if the user’s message contains a certain amount of arguments (words).

## Syntax
```
$argsCheck[How many?;Error message]
```

### Parameters
- `How many?` `(Type: HowMany || Flag: Required)`: How many arguments there should be in the user’s message.
   > If you want users to have **3 or more arguments** in their message, you can use `>3`. If you want users to have **less than 3 arguments** in their message, you can use `<3`. If you want the users to have **exactly 3 arguments** in their message, put `3`. 
- `Error message` `(Type: String || Flag: Emptiable)`: The message that the bot will send if the user has too many/few arguments.

## Example
```
$nomention
$argsCheck[>1;❌ Please provide something for me to say!]
$message
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
    ❌ Please provide something for me to say!
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example Hello World!
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hello World!
```

