# $checkUserPerms
Command returns 'true' if a user has all of the provided permissions otherwise 'false' is returned.

## Usage
```$checkUserPerms[userID;perm1;(optional) perm2;(optional) etc..]```

### Breakdown
`userID` - The user that the bot checks the permissions for.

`perm1` - The first permission the bot checks for.

`perm2` and `etc...` - You can put as many permissions as you like, these fields are optional.

## Example Command
```$checkUserPerms[$authorID;ban]```

### Expected Output
```
If the user has ban permissions: true
If the user doesn't have ban permissions: false
```

## Supported Permissions
-   A list of perms/permissions supported in the "perm1", "perm2", etc fields.

• sendmessages 

• readmessages

• createinstantinvite

• admin

• changenicknames

• managenicknames

• addreactions

• ban

• kick

• manageroles

• manageserver

• managemessages

• managechannels

• manageemojis

• mentioneveryone

• readmessagehistory

• attachfiles

• tts

• managewebhooks

• embedlinks

• externalemojis
