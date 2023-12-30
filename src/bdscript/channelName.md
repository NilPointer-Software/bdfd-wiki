# $channelName
Returns the name for the provided channel ID.
## Syntax
```
$channelName[Channel ID]
```


### Parameters
- `channelID` `(Type: Snowflake || Flag: Required)`: The channel which name will be returned.

> 🧙‍♂️ [How do I find channel IDs? (click-me)](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)


## Example
```
$nomention
Channel Name: `#$channelName[$channelID]`
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example

- username: BDFD Support
  color: "#b9a0e0"
  bot: true
  content: |
    Channel Name: <discord-inline-code>#main-chat</discord-inline-code>
```
