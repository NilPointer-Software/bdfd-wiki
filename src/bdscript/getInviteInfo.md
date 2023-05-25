# $getInviteInfo
Returns information about the provided invite code.

## Syntax
```
$getInviteInfo[Invite code;Invite property]
```

### Parameters
- `Invite code` `(Type: String || Flag: Required)`: The invite code to get info about.
- `Invite property` `(Type: Enum || Flag: Required)`: The information to get about this invite. Invite properties:
  - `channel` - The channel that this invite is for.
  - `creationDate` - The creation date of this invite.
  - `inviter` - The ID of the user who created this invite.
  - `isTemporary` - Whether or not this invite is temporary.
  - `uses` - How many times this invite has been used.

## Example
```
$nomention
$argsCheck[>1;Please provide a valid invite code!]
$title[Invite Info]
$description[Uses: $getInviteInfo[$message;uses]
Channel: $getInviteInfo[$message;channel]
Date: $getInviteInfo[$message;creationDate]
Inviter: $getInviteInfo[$message;inviter]
Temporary: $getInviteInfo[$message;isTemporary]]
$color[#673ab7]
```

![Example](https://user-images.githubusercontent.com/69215413/122654170-88880280-d117-11eb-9123-947b48354ab6.png)
