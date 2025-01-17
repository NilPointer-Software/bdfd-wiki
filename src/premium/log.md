# $log
<div class="functionTags">
  <span id="PremiumTag">Premium</span>
</div>

Logs an error message to the bot logs upon encountering a specific issue (`Type` parameter).

```admonish tip info
You can use this function 1500 times per day.
```

## Syntax
```
$log[Text;(Type)]
```

### Parameters
- `Log Message` `(Type: String || Flag: Required)`: The text to be output to the logs.
- `Type` `(Type: Enum || Flag: Optional)`: The log type to be displayed. Default is `info`.

#### Log Types
- `success`: Green color
- `info`: Blue color
- `warning`: Yellow color
- `error`: Red color
- `bdscript`: Can't be used in `$log[]` function. Appears automatically when an error is made in the code. Can be disabled by [`$suppressErrorLogging`](./suppressErrorLogging.md).
- Default input for "`Type`" parameter is `info`.

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

- In the **[BDFD Web App](https://app.botdesignerdiscord.com/)**:\
![example](https://github.com/user-attachments/assets/3274de0c-5db3-4e68-8cb5-7a83bb6e7f1b)

```admonish question title="What is this?"
How [`$username`](./username.md) works?
```
