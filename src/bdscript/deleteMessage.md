# $deleteMessage

Deletes a message

## Usage
```
$deleteMessage[channel ID;message ID]
```
### Parameters
- `channel ID` `(Type: Snowflake || Flag: Required)`: The channel ID where the message is.
- `message ID` `(Type: Snowflake || Flag: Required)`: The ID of the message which will be deleted.

## Example
```
$nomention
$deleteMessage[$channelID;$messageID]
Hello $username!
```
