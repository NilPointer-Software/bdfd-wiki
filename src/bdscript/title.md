# $title
Adds an embedded title to bot's response message.

## Syntax
```
$title[Text;(Index)]
```

### Parameters
- `Text` `(Type : String || Flag : Emptiable)` : The text to set the title as. It cannot exceed more than 256 characters.
- `Index` `(Type : Integer || Flag : Optional)` : What [embed index](../resources/embedIndexes.md) the title should belong to, defaults to `1`.

### Permissions
Required permissions that the bot must have for this function to work properly:
- `sendmessages`
- `sendmessagesinthreads`
- `embedlinks`

## Example
```
$nomention
$title[This is a title!]
$description[⬆️ That is a nice title.]
```
![example](https://user-images.githubusercontent.com/69215413/123186040-4c310b00-d465-11eb-99b1-6c43828c8ddb.png)
