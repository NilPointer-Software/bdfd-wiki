# $allowRoleMentions
Enables role pings only for the provided role IDs, while the roles not provided will be "fake pinged" *(the role will be pinged, but users will not be notified)*.

## Syntax
```
$allowRoleMentions[Role IDs;...]
```

### Parameters
- `Role IDs` `(Type: Snowflake || Flag: Emptiable)`: The role(s) that can be pinged, leave empty to disable pings for every role. Separate role IDs using `;`.

## Example
```
$nomention
$allowRoleMentions[]
I'm pinging <@&858376972303204362>, but no one got notified; wow!
```
``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !example

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  roles:
    Extremely Cool Role: "#FFD700"
  content: |
    I'm pinging <@Extremely Cool Role>, but no one got notified; wow!
```
