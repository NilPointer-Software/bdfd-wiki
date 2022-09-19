# removeChannel
Removes a specified channel from the current server.

## Syntax
```js
removeChannel(channelID)
```

### Parameters
- `channelID` : The channel to be removed. Value must be a valid channel snowflake ID.

### Permissions
Required permissions which the bot must have for this function to work properly.
- `managechannels`
- `readmessages`

## Example
```js
try {
  const msg = message.replace(commandPrefix, '').replace(/  +/g, ' ').trim().split(' ', 1);

  if (!msg.length) {
    setResponse(`Usage : \` ${commandPrefix} [#channel] \``);
  } else {
    const isChannel = /^<#!?(\d+)>$/.test(msg);

    if (!isChannel)
      throw new Error('Mention a valid channel!');

    const channelID = msg[0].match(/\d/g).join('');

    sendChannelMessage(channelId, `Channel <#${channelID}> has been deleted!`);

    removeChannel(channelID);
  };
} catch (err) {
  setResponse('Command Error : ` ' + err.message + ' `');
};
```

![Screenshot_20220919_171553](https://user-images.githubusercontent.com/95774950/191010718-37e88b91-2769-439a-92ce-3e2b7a4605e8.png)\
![InShot_20220919_171824516](https://user-images.githubusercontent.com/95774950/191010751-6e7bd8d8-00ef-4ca6-850d-4124254cc5a3.jpg)
