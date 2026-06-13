# $onlyAdmin
Allows command execution only for users with *administrator* permission.

## Syntax
```
$onlyAdmin[Error message]
```

### Parameters 
- `Error message` `(Type: String || Flag: Emptiable)`: The error message that is returned when the user isn't an administrator.

## Example
```
$nomention
$onlyAdmin[❌ Only administrators can use this command!]

$c[Put your code here.]
```

``` discord yaml
- user_id: 1081869405245407262
  username: MrSkraba101
  color: "#E67E22"
  content: |
      !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
      ❌ Only administrators can use this command!
- user_id: 1081869405245407262
  username: MrSkraba101
  color: "#E67E22"
  content: |
      !example
- user_id: 1081869405245407262
  username: MrSkraba101
  color: "#E67E22"
  content: |
      This time the bot didn't return the error message, so I must have administrator permissions! 🥳    
```
