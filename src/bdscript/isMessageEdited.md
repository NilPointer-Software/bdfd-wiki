# $isMessageEdited
Checks if the message is edited, if it's returns true if it's not it returns false.

## Syntax
```
$isMessageEdited[ChannelID;MessageID]
```

### Parameters
- `ChannelID` `(Type: Snowflake || Flag: Required)`: The channel ID where the message is.
- `MessageID` `(Type: Snowflake || Flag: Required)`: The ID of the message.

## Example
```
$nomention
$isMessageEdited[$channelID;$lastMessageID]
```

``` discord yaml
- username: Ivaylo
  user_id: 1251981607468798089
  color: "#E67E22"
  content: |
    Hello guys!
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  command:
    author: Ivaylo
    user_id: 1251981607468798089
    command: /example
    color: "#E67E22"
  content: |
    false
```

```admonish question title="What is this?"
How [`$lastMessageID`](./lastMessageID.md) works?
```