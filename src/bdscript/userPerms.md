# $userPerms
Returns a user's permissions.

## Syntax
```
$userPerms[User ID;Return amount;Separator]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to get permissions for.
- `Return amount` `(Type: Integer || Flag: Required)`: The number of permissions to return. Use `-1` to return all.
- `Separator` `(Type: String || Flag: Required)`: A text/character which is used for separating each permission.

## Example
```
$nomention
$userPerms[$authorID;-1;, ]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    CREATE_INSTANT_INVITE, ADMINISTRATOR, ADD_REACTIONS, STREAM, VIEW_CHANNEL, SEND_MESSAGES, EMBED_LINKS, ATTACH_FILES, READ_MESSAGE_HISTORY, MENTION_EVERYONE, USE_EXTERNAL_EMOJIS, CONNECT, SPEAK, USE_VAD, CHANGE_NICKNAME, USE_APPLICATION_COMMANDS, REQUEST_TO_SPEAK, CREATE_PUBLIC_THREADS, CREATE_PRIVATE_THREADS, USE_EXTERNAL_STICKERS, SEND_MESSAGES_IN_THREADS
```

```admonish question title="What is this?"
How [`$authorID`](./authorID.md) works?
```
