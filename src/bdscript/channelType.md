# $channelType

Returns channel type. 

## Syntax
```
$channelType[channel ID]
```
> The different channel types that the bot will return are: `text`, `voice`, `category`, `thread`, `dm`, `stage`, `announcement` and `forum`.

### Parameters 
- `channel ID` `(Type: Snowflake || Flag: Required)`: The channel which type will be returned.


## Example
```
$nomention
$channelType[$channelID]
```
