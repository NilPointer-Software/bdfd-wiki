# $botLeave[]
 Makes the bot leave the server matching the provided [server ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID).

## Syntax
```
$botLeave[guild ID]
````

## Parameters
- `guild ID` `(Type : Snowflake || Flag : Required)` : The ID of a guild to leave.

## Example
```
$nomention
$sendMessage[I left out `$serverName[$message]` server]
$botLeave[$message]
```

![example](https://user-images.githubusercontent.com/113303649/210335691-9d23cfd6-f7e8-4924-8afc-dd3b523ca071.png)

![example](https://user-images.githubusercontent.com/113303649/210337078-dbdb0539-6f4a-4271-8574-afc43551d0e8.png)

> If you are using **BDScript 2**, put `$botLeave[]` at the very bottom of the code so that the code works correctly.
> 
❌ Not correct:
```
$botLeave[$message]
$nomention
$sendMessage[I left this server!]
```
✅ Correct:
```
$nomention
$sendMessage[I left this server!]
$botLeave[$message]
```
