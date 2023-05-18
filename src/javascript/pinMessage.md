# pinMessage
Pins a message to the channel.

## Syntax
```js
pinMessage(channelID, messageID)
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

    sendChannelMessage(channelId, 'A message has been pinned!');
    
    pinMessage(msg[0].match(/\d/g).join(''), msg[1]);
  };
} catch (err) {
  setResponse('Command Error : ` ' + err.message + ' `');
};
```

![Screenshot_20220925_162848](https://user-images.githubusercontent.com/95774950/192140456-ebf9842b-0a05-4c89-bd68-3521b42f2054.png)\
![Screenshot_20220925_162938](https://user-images.githubusercontent.com/95774950/192140467-786505ff-02e0-4443-82e4-03afcfdb2eed.png)
