# $parentID[]
Returns the parent category ID for the given channel ID.

## Syntax
```
$parentID[Channel ID]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel from which to retrieve the category ID.

## Example
```
$nomention
Category ID: $parentID[$mentionedChannels[1]]
```
![example](https://user-images.githubusercontent.com/94063167/199022843-84b86272-d690-4630-99ba-80e024ffea52.png)
