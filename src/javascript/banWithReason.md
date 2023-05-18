# banWithReason
Bans a user from the current guild with reason.

## Syntax
```js
banWithReason(userID, reason)
```

### Parameters
- `userID` : The user to ban. Value must be a valid user snowflake ID.
- `reason` : The ban reason to add in Audit Logs and Guild Bans. Reason must not exceed more than 512 characters.

### Permissions
Required permission which the bot must have for this function to work properly:
- `ban`

### Example
```js
try {
  const msg = message.replace(commandPrefix, '').trim().split(' ');

  if (!msg[0]) {
    setResponse(`Usage : \` ${commandPrefix} [@user] [Reason] \``);
  } else {
    const
      mention = /^<@!?(\d{17,20})>$/.test(msg.shift()),
      reason = msg.join(' ').trim();

    if (!mention || !userMentions[0])
      throw new Error('Mention an user!');

    if (userMentions[0] === authorId)
      throw new Error('You can\'t ban yourself!');

    if (!reason)
      throw new Error('Missing reason!!');

    if (reason.length > 512)
      throw new Error('Failed to ban! Reason must be lower or equal to 512 characters');

    sendChannelMessage(channelId, `*<@${authorId}> bans <@${userMentions[0]}> with reason \` ${reason} \`!!*`);

    banWithReason(userMentions[0], reason);
  };
} catch (err) {
  setResponse('Command Error : ` ' + err.message + ' `');
};
```

![Screenshot_20220922_153202](https://user-images.githubusercontent.com/95774950/191721518-bd5e65a6-5806-4667-b666-ad92e66a305d.png)\
![InShot_20220922_153537132](https://user-images.githubusercontent.com/95774950/191721557-9301171b-3807-4fb5-a7a2-ec770844438f.jpg)
