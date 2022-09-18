# ban
Bans an user from the current guild.

> 📌 In order to ban an user from a guild, the bot must have `BAN` permission.

## Syntax
```js
ban(userID)
```

### Parameters
- `userID` : The user to ban. Value must be a valid user snowflake ID.

### Example
```js
try {
  const msg = message.replace(commandPrefix, '').trim();

  if (!msg.length) {
    setResponse(`Usage : \` ${commandPrefix} @user  \``);
  } else {
    const mention = /^<@!?(\d+)>/.test(msg);

    if (!mention || !userMentions[0])
      throw new Error('Mention an user!');

   if (userMentions[0] === authorId)
      throw new Error('You can\'t ban yourself!');

    sendChannelMessage(channelId, `*<@${authorId}> bans <@${userMentions[0]}>!!*`);

    ban(userMentions[0]);
  };
} catch (err) {
  setResponse('Command Error : ` ' + err.message + ' `');
};
```

![Screenshot_20220917_165612](https://user-images.githubusercontent.com/95774950/190855774-b530f41a-df82-4eb7-a333-f52d613d6327.png)\
![InShot_20220917_172017419](https://user-images.githubusercontent.com/95774950/190855782-1aa5bf81-06d0-409d-bc06-2cf4aaecc1fb.jpg)
