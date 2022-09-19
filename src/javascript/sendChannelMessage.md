# sendChannelMessage
Sends a message to the provided channel.

## Syntax
```js
sendChannelMessage(channelId, message)
```

### Parameters
- `channelId` : The channel to send the message. Value must be a valid channel snowflake ID.
- `message` : The message to send to the provided channel ID.

> 📝 All parameters are required.

### Permissions
Required permissions which the bot must have for this function to work properly.
- `sendmessages`
- `sendmessagesinthreads`
- `readmessages`

## Example
```js
try {
  const msg = message.replace(commandPrefix, '').replace(/  +/g, ' ').trim().split(' ', 2);

  if (!msg[0]) {
    setResponse(`Usage : \` ${commandPrefix} [#channel] [Message] \``);
  } else {
    const isChannel = /^<#!?(\d+)>$/.test(msg[0]);

    if (!isChannel)
      throw new Error('Mention a valid channel!');

    if (!msg[1])
      throw new Error('Provide a message!');

    const
      channelID = msg[0].match(/\d/g).join(''),
      content = message.replace(commandPrefix, '').replace(msg[0], '').trim();

    if (content.length > 2000)
      throw new Error('Failed to send the message! Reached maximum message character limit.');

    sendChannelMessage(channelID, content);
  };
} catch (err) {
  setResponse('Command Error : ` ' + err.message + ' `');
};
```

![Screenshot_20220917_102010](https://user-images.githubusercontent.com/95774950/190842663-13d63729-2008-4f7f-85ce-1aa52242fd8c.png)
