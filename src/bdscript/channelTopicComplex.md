# $channelTopic[]
Returns the topic of a channel by its ID.

## Syntax
```
$channelTopic[Channel ID]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel to return its topic.

## Example
```
$nomention
<#$noMentionMessage>'s channel topic is: $channelTopic[$noMentionMessage]
```
``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !example 860870690323300359

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    <#demo>'s channel topic is: Demos, examples and more!
```
