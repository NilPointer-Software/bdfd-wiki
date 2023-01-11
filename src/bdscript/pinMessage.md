# $pinMessage
Pins a message in the current channel.

> ⚠️ A channel can have a maximum of 50 pinned messages.

## Usages
There are 2 usages of `$pinMessage` :

### Usage #1
```
$pinMessage
```
It pins bot's response message.

#### Example
```
$nomention
$pinMessage
This is a cool pinned message! 😎
```

![example](https://user-images.githubusercontent.com/69215413/123554940-97db0180-d750-11eb-95b5-2a995ff9c895.png)

### Usage #2
```
$pinMessage[channelID;messageID]
```
It pins a specific message using it's message ID & channel ID.

#### Parameters 
- `channelID` `(Type : Snowflake || Flag : Required)`
- `messageID` `(Type : Snowflake || Flag : Required)`

##### Example
```
$nomention
$pinMessage[$channelID;$messageID]
I have pinned your message!
```
![Screenshot_20220721_151403](https://user-images.githubusercontent.com/95774950/180184192-bb11736d-1f92-4ce9-b3e0-df513179fa0c.png)
