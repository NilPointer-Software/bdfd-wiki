# kickWithReason
Kicks a user from the current guild with reason.

## Syntax
```js
kickWithReason(userID, reason)
```

### Parameters
- `userID` : The user to kick. Value must be a valid user snowflake ID.
- `reason` : The kick reason to add in Audit Logs. Reason must not exceed more than 512 characters.

### Permissions
Required permission which the bot must have for this function to work properly:
- `kick`

## Example
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
      throw new Error('You can\'t kick yourself!');

    if (!reason)
      throw new Error('Missing reason!!');

    if (reason.length > 512)
      throw new Error('Failed to kick! Reason must be lower or equal to 512 characters');

    sendChannelMessage(channelId, `*<@${authorId}> kicks <@${userMentions[0]}> with reason \` ${reason} \`!!*`);

    kickWithReason(userMentions[0], reason);
  };
} catch (err) {
  setResponse('Command Error : ` ' + err.message + ' `');
};
```

![Screenshot_20220925_104418](https://user-images.githubusercontent.com/95774950/192129452-b8569a09-a8da-4d6a-b877-fcc5e7ff5150.png)\
![InShot_20220925_104547037](https://user-images.githubusercontent.com/95774950/192129456-d5c1092f-dd4d-4bd5-a450-5534acc097d3.jpg)
