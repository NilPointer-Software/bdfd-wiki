# $createChannel
Creates a new channel.

## Syntax
```
$createChannel[Name;Type;(Category ID)]
```

```admonish warning title="Limit"
Discord allows users to create up to 500 channels per server. This includes all channel types.
```

### Parameters
- `Name` `(Type: String || Flag: Required)`: The name of the new channel.
  
```admonish warning title="Limit"
Channel names can have a maximum of 100 characters.
```

- `Type` `(Type: Enum || Flag: Required)`: The channel type. Channel types:
  - `category`
  - `text`
  - `voice`
  - `stage`
  - `forum`
- `Category ID` `(Type: Snowflake || Flag: Optional)`: The category to put the channel in (if applicable).
>  [How to get the Category ID guide.](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)

## Example
```
$nomention
$createChannel[cool-channel;text]
New channel created!
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    New channel created!
```
\

![example](https://user-images.githubusercontent.com/69215413/125972524-95307b17-bfcc-4525-a4fa-1d58a30a1fa9.png)

~~~admonish tip
You can use [`$channelID[]`](./channelIDComplex.md) to return the channel ID.

```
$nomention
$createChannel[main-chat;text]
New channel created! ID: $channelID[main-chat]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    New channel created! ID: 566370477967147018
```

> How [`$channelID[]`](./channelIDComplex.md) works?

~~~

