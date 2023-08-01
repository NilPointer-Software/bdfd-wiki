# $ignoreTriggerCase
*(for premium bots)*

`$ignoreTriggerCase` is a function that makes the command trigger __not__ case sensitive. For example, `!help` and `!HeLp` would both work.

## Syntax
```
$ignoreTriggerCase
```

## Example
```
$nomention
$ignoreTriggerCase
Hello World!
```
### With `$ignoreTriggerCase`
``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !hello

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Hello World!

- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !HeLLo

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Hello World!
```
\
### Without `$ignoreTriggerCase`
``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !hello

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Hello World!

- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !HeLLo
```
