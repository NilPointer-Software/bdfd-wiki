# $channelNames
List all channel names separated by a given separator.

## Syntax
```
$channelNames[separator;(guild ID)]
```
### Parameters
- `seperator` `(Type: String || Flag: Emptiable)`: The separator used to separate the channel names.
- `guild ID` `(Type: Snowflake || Flag: Optional)`: The guild for which to return the channel names. _(Defaults to the current guild)_
## Example
```
$nomention
#$channelNames[ 
#]
```
![example](https://user-images.githubusercontent.com/113303649/212546110-0db7b143-f192-45df-9866-98d8c4f7913e.png)
> It can return names of the `category`, `channel`, `forum`.