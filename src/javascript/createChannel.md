# createChannel
Creates a new channel in the current guild.

## Syntax
```js
createChannel(name, type)
```

### Parameters
- `name` : The name of the channel.
- `type` : The type of the channel to create. Value must be either _**text**_ or _**voice**_.

### Permissions
Required permission which the bot must have for this function to work properly.
- `managechannels`

## Example
```js
try {
  const
    msg = message.replace(commandPrefix, '').trim().replace(/  +/g, ' ').split(' '),
    type = msg.shift().toLowerCase();

  if (!type) {
    setResponse(`Usage : \` ${commandPrefix} [Type] [Name] \``);
  } else {
    if (type === 'text' || type === 'voice') {

      if (!msg.join(' '))
        throw new Error('Provide a channel name!');
 
      if (msg.join(' ').length > 100)
        throw new Error('Couldn\'t create channel! Channel name must be lower than or equal to 100 characters!');

      sendChannelMessage(channelId, `A ${type} channel has been created!`);

      createChannel(msg.join(' '), type);
    } else throw new Error('Invalid Channel Type!! Must be either "Text" or "Voice"');
  };
} catch (err) {
  setResponse('Command Error : ` ' + err.message + ' `');
};
```

![Screenshot_20220922_092653](https://user-images.githubusercontent.com/95774950/191656383-54277b2f-b36c-4550-89bd-d113094aa93a.png)\
![InShot_20220922_092945515](https://user-images.githubusercontent.com/95774950/191656407-b2b61c57-ff3b-4259-b9f1-8ae92c0bf79b.jpg)
