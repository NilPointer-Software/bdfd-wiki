# $channelPosition[]
Returns the position of a given channel using its ID.

## Syntax
```
$channelPosition[Channel ID]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The ID of a channel whose position will be returned.
> [How to get a channel ID guide.](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)
## Example
```
$nomention
Channel Position: $channelPosition[$mentionedChannels[1;yes]]
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <#main-chat>
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Channel Position: 2
```

