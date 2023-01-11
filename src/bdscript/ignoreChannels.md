# $ignoreChannels
The command can't be executed in any of the provided channels. If the channel is ignored, then the 'errorMessage' is returned.

## Usage
```
$ignoreChannels[channelIDs;errorMessage]
```

### Parameters
- `channelIDs` `(Type : Snowflake || Flag : Emptiable)` :  The channels to ignore. Separate IDs using `;`.
- `errorMessage` `(Type : String || Flag : Emptiable)` :  The message that is returned when the channel is ignored.
