# $botLeave[]
Forces the bot to leave the server matching the provided [server ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID).

## Syntax
```
$botLeave[Guild ID]
````

### Parameters
- `Guild ID` `(Type: Snowflake || Flag: Required)`: The ID of the guild to leave.

## Example
```
$nomention
$sendMessage[I left out `$serverName[$message]` server.]
$botLeave[$message]
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 1009018156494368798
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    I left out <discord-inline-code>BDFD Support</discord-inline-code> server.
```
\
![example](https://user-images.githubusercontent.com/113303649/210337078-dbdb0539-6f4a-4271-8574-afc43551d0e8.png)

> If you are using **BDScript 2**, put `$botLeave[]` at the very bottom of the code so that the code works correctly i.e:
> 
> ❌ Not correct:
> ```
> $botLeave[$message]
> $nomention
> $sendMessage[I left this server!]
> ```
>
> ✅ Correct:
> ```
> $nomention
> $sendMessage[I left this server!]
> $botLeave[$message]
> ```
