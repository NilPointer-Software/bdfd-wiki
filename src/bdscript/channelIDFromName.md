# $channelDFromName
*(deprecated)*

> 🧙‍♂️ This function is deprecated, instead better use [`$channelID[]`](./channelIDComplex.md).

Returns a channel's ID from its name.

## Syntax
```
$channelIDFromName[Channel name]
```

### Parameters
- `Channel name` `(Type: String || Flag: Required)`: The channel name that the bot will return the channel ID for.

## Example
```
$nomention
Channel ID: $channelIDFromName[$mesaage]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example main-chat

- username: BDFD Support
  color: "#b9a0e0"
  bot: true
  content: |
    Channel ID: 1014546423032860754
```
