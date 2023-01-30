# $channelPosition[]
Returns the position of a given channel using its ID.

## Syntax
```
$channelPosition[channel ID]
```

### Parameters
- `channel ID` `(Type: Snowflake || Flag: Required)`: The ID of a channel whose position will be returned.
> [How to get a channel ID guide.](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)
## Example
```
$nomention
Channel Position: $channelPosition[$mentionedChannels[1;yes]]
```
![example](https://user-images.githubusercontent.com/113303649/213238052-dff8ca6d-b0ec-489a-96c3-20146606a0e3.png)

