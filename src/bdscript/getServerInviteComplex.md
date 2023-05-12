# $getServerInvite[]
Returns the provided server's invite URL.

> 🧙‍♂️ **Note:** The bot must be present in the provided server for it to create an invite.

## Syntax
```
$getServerInvite[Guild ID]
```

### Parameters 
- `Guild ID` `(Type: Snowflake || Flag: Required)`: The server for which to get the invite.

> 🧙‍♂️ [How do I find a server/guild ID? (click-me)](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID)

### Permissions
Required permissions that the bot must have for this function to work properly :
- `createinstantinvite`

## Example
```
$nomention
$getServerInvite[$message[1]]
```
![example](https://user-images.githubusercontent.com/111157596/232099171-ab1a4cea-836a-45e7-9a93-2012ac4012e5.png)
