# giveRole
Assigns a role to a specified user.

## Syntax
```js
giveRole(userID, roleID)
```

### Parameters
- `userID` : The user to get the role. Value must be a valid user snowflake ID.
- `roleID` : The role to assign to the user. Value must be a valid role snowflake ID.

### Permissions
Required permission which the bot must have for this function to work properly.
- `manageroles`

## Example
```js
try {
  const msg = message.replace(commandPrefix, '').trim().replace(/  +/g, ' ').split(' ', 2);

  if (!msg[0]) {
    setResponse(`Usage : \` ${commandPrefix} [@user] [@role] \``);
  } else {
    const
      userMention = /^<@!?(\d{17,20})>$/.test(msg[0]),
      roleMention = /^<@&!?(\d{17,20})>$/.test(msg[1]);

    if (!userMention || !userMentions[0])
      throw new Error('Mention an user!');

    if (!roleMention || !roleMentions[0])
      throw new Error('Mention a role!');

    sendChannelMessage(channelId, `Gave <@&${roleMentions[0]}> to <@${userMentions[0]}>!`);

    giveRole(userMentions[0], roleMentions[0]);
  };
} catch (err) {
  setResponse('Command Error : ` ' + err.message + ' `');
};
```

![Screenshot_20220917_225634](https://user-images.githubusercontent.com/95774950/190871610-33a41da6-e74c-414d-91a3-4904f1200394.png)\
![InShot_20220918_000019652](https://user-images.githubusercontent.com/95774950/190871625-9e676924-68b4-4189-9bba-44a7c3cf4488.jpg)
