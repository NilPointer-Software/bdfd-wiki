# takeRole
Removes a role from a specified user.

## Syntax
```js
takeRole(userID, roleID)
```

### Parameters
- `userID` : The user of whose role is to get removed. Value must be a valid user snowflake ID.
- `roleID` : The role to take from the user. Value must be a valid role snowflake ID.

> 📌 All parameters are required.

### Permissions
Required permissions which the bot must have for this function to work properly.
- `manageroles`
- `readmessages`

## Example
```js
try {
  const msg = message.replace(commandPrefix, '').trim().replace(/  +/g, ' ').split(' ', 2);

  if (!msg[0]) {
    setResponse(`Usage : \` ${commandPrefix} [@user] [@role] \``);
  } else {
    const
      userMention = /^<@!?(\d+)>$/.test(msg[0]),
      roleMention = /^<@&!?(\d+)>$/.test(msg[1]);

    if (!userMention || !userMentions[0])
      throw new Error('Mention an user!');

    if (!roleMention || !roleMentions[0])
      throw new Error('Mention a role!');

    sendChannelMessage(channelId, `Removed <@&${roleMentions[0]}> from <@${userMentions[0]}>!`);

    takeRole(userMentions[0], roleMentions[0]);
  };
} catch (err) {
  setResponse('Command Error : ` ' + err.message + ' `');
};
```

![Screenshot_20220919_074515](https://user-images.githubusercontent.com/95774950/190939886-75bccf53-a8cd-4928-9f71-26a990689731.png)\
![InShot_20220919_023352223](https://user-images.githubusercontent.com/95774950/190939183-d1666cdd-4079-4ee2-a5b2-587e0dd656ed.jpg)
