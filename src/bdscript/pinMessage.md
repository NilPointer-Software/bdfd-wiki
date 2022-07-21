# $pinMessage
Pins a message in the current channel.

> ⚠️ A channel can have a maximum of 50 pin messages.

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
$pingMessage[channelID;messageID]
```
It pins a specific message using it's message ID & channel ID.

##### Example
```
$nomention
$pingMessage[$channelID;$messageID]
I have pinned your message!
```
