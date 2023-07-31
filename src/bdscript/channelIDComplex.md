# $channelID[]
Returns the channel ID for the given channel name.

## Syntax
```
$channelID[Channel name]
```

### Parameters
- `Channel name` `(Type: String || Flag: Required)`: The name of the channel.

## Example
```
$nomention
Channel ID: $channelID[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example main-chat
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Channel ID: 566370477967147018
```

> It supports category names.
>
> ![example](https://user-images.githubusercontent.com/113303649/212723060-6a914e0b-b32a-49d4-9ea2-495cef2cff1d.png)
