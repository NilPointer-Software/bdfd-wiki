# kick
Kicks an user from the current guild.

## Syntax
```js
kick(userID)
```

### Parameters
- `userID` : The user to kick. Value must be a valid user snowflake ID.

### Permissions
Required permission which the bot must have for this function to work properly.
- `kick`

## Example
```js
try {
  const msg = message.replace(commandPrefix, '').trim();

  if (!msg) {
    setResponse(`Usage : \` ${commandPrefix} [@user] \``);
  } else {
    const mention = /^<@!?(\d{17,20})>/.test(msg);

    if (!mention || !userMentions[0])
      throw new Error('Mention an user!');

    if (userMentions[0] === authorId)
      throw new Error('You can\'t kick yourself!');

    sendChannelMessage(channelId, `*<@${authorId}> kicked <@${userMentions[0]}>!!*`);

    kick(userMentions[0]);
  };
} catch (err) {
  setResponse('Command Error : ` ' + err.message + ' `');
};
```

![Screenshot_20220919_163929](https://user-images.githubusercontent.com/95774950/191005543-826d0483-6efe-4631-9198-6ceab224f2c9.png)\
![InShot_20220919_164211838](https://user-images.githubusercontent.com/95774950/191005572-538deebc-e660-4ce3-89ff-5929197c41ae.jpg)
