# unban
Unbans a user from the current guild.

## Syntax
```js
unban(userID)
```

### Parameters
- `userID` : The user to unban. Value must be a valid user snowflake ID.

### Permissions
Required permission which the bot must have for this function to work properly:
- `ban`

## Example
```js
try {
  const msg = message.replace(commandPrefix, '').replace(/  +/g, ' ').trim().split(' ', 1);

  if (!msg.length) {
    setResponse(`Usage : \` ${commandPrefix} [User ID] \``);
  } else {
    const id = /^\d{17,20}$/.test(msg);

    if (!id)
      throw new Error('Invalid ID!');

    if (msg[0] === authorId)
      throw new Error('You are not banned!');

    sendChannelMessage(channelId, `<@${authorId}> unbans \` ${msg} \`!!`);
    
    unban(msg)
  };
} catch (err) {
  setResponse('Command Error : ` ' + err.message + ' `');
};
```

![Screenshot_20220921_230659](https://user-images.githubusercontent.com/95774950/191576451-39d7ca34-b34a-4acc-b3cc-9d5e82907516.png)\
![InShot_20220921_230931790](https://user-images.githubusercontent.com/95774950/191576471-5677053f-c375-4d96-8f22-e15b0c5502f0.jpg)
