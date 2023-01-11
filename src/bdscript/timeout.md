# $timeout
Timeouts a user for a certain duration.

## Syntax
```
$timeout[Duration;(User ID)]
```

### Parameters
- `Duration` `(Type : Duration || Flag : Required)` : The amount of time the user should be timed out for. It shouldn't exceed more than "28 days".
- `User ID` `(Type : Snowflake || Flag : Optional)` : The user to timeout. If this parameter is empty, timeouts the mentioned users.

### Permissions
Required permissions that the bot must have for this function to work properly:
- `moderatemembers`

## Examples
- Without ID
   ```
   $nomention
   $timeout[$message[1]]
   ```
   ![](https://user-images.githubusercontent.com/70456337/183470087-6b72ea9f-9365-4686-9483-09bad385e10b.png)

- With ID
   ```
   $nomention
   $allowMention
   $timeout[$message[1];$findUser[$message[2];no]]
   ```
   ![](https://user-images.githubusercontent.com/70456337/183470187-305f846a-7515-46b5-af7e-6c2f5713656f.png)

## Related Resources
- [Time Out FAQ](https://support.discord.com/hc/en-us/articles/4413305239191-Time-Out-FAQ)
- [$untimeout](./untimeout.md)
