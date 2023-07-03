# $thumbnail
Adds an embedded thumbnail to the bot's response message.

## Syntax
```
$thumbnail[Image URL;(Index)]
```

### Parameters
- `Image URL` `(Type: URL || Flag: Emptiable)`: The image to set as the thumbnail.
- `Index` `(Type: Integer || Flag: Optional)`: What [embed index](../resources/embedIndexes.md) the thumbnail should belong to, default to `1`.

### Permissions
Required permissions that the bot must have for this function to work properly:
- `sendmessages`
- `sendmessagesinthreads`
- `embedlinks`

## Example
```
$nomention
$description[This is the thumbnail ↘️]
$thumbnail[$authorAvatar]
```
![example](https://user-images.githubusercontent.com/69215413/126551913-b3746b47-615a-48a3-9729-d07529e33f97.png)
