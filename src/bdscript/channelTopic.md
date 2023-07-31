# $channelTopic
Returns the topic of the channel that the command is being used in.

## Syntax
```
$channelTopic
```

## Example
```
$nomention
<#$channelID>'s channel topic is: $channelTopic
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
  content: |
    <#testing>'s channel topic is: A testing channel!
```
