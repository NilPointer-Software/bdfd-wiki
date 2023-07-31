# $authorID
Returns message's author ID. 

## Syntax
```
$authorID
```

## Example
```
$nomention
This command was executed by <@$authorID>!
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
  highlight: true
  content: |
    This command was executed by <@Nicky>!
```
