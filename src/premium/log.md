# $log
Logs an error message to the bot logs upon encountering a specific issue (`Type` parameter).

## Syntax
```
$log[Text;(Type)]
```

### Parameters
- `Log Message` `(Type: String || Flag: Required)`: The text to be output to the logs.
- `Type` `(Type: Enum || Flag: Optional)`: The log type to be displayed.

#### Log Types
Value (`Type`) | Color
---------------|--------
success        | Green
info           | Blue
warning        | Yellow
error          | Red

## Example
```
$nomention
Hello world!
$log[$username used secret command!]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hello world!
```
