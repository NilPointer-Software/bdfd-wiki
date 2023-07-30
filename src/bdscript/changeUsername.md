# $changeUsername
Changes the mentioned user's nickname.

## Syntax
```
$changeUsername[New nickname]
```

### Parameters
- `New nickname` `(Type: String || Flag: Required)`: The text to change the user's nickname to. It cannot exceed more than 32 characters. Using `%username%` will be replaced by the real user's username.

## Example
```
$nomention
$onlyPerms[managenicknames;Missing permission 'manage nicknames'!]
$argsCheck[>2;Wrong usage! Correct Usage: `!nickname (user) (text)`]
$changeUsername[$noMentionMessage]
Changed <@$mentioned[1]>'s nickname to **$noMentionMessage**.
```
``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !nickname <@Cool Bot> Cool Bot

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Changed <@Cool Bot>'s nickname to <b>Cool Bot</b>.
```
