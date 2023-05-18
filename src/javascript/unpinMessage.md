# unpinMessage
Unpins a message from the channel.

## Syntax
```js
unpinMessage(channelID, messageID)
```

### Parameters
- `channelID` : The channel where the message is located. Value must be a valid channel snowflake ID.
- `messageID` : The ID of the message. Value must be a valid message snowflake ID.

### Permissions
Required permission which the bot must have for this function to work properly:
- `managemessages`

## Example
```js
try {
  const msg = message.replace(commandPrefix, '').replace(/  +/g, ' ').trim().split(' ', 2);

  if (!msg[0]) {
    setResponse(`Usage : \` ${commandPrefix} [#channel] [Message ID] \``);
  } else {

    if (!/^<#!?(\d{17,20})>$/.test(msg[0]))
      throw new Error('Mention a valid channel!');

    if (!/^\d{17,20}$/.test(msg[1]))
      throw new Error('Provide a valid message ID!');

    sendChannelMessage(channelId, 'A message has been unpinned!');
    
    unpinMessage(msg[0].match(/\d/g).join(''), msg[1]);
  };
} catch (err) {
  setResponse('Command Error : ` ' + err.message + ' `');
};
```

![Screenshot_20220925_163311](https://user-images.githubusercontent.com/95774950/192140919-60177751-bc8b-4b64-b892-52e2e4f14b4e.png)\
![InShot_20220925_163609635](https://user-images.githubusercontent.com/95774950/192140923-3ae37aec-3b12-48a9-907e-d352ba102477.jpg)
