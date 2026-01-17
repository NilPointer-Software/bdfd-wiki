# $title
Adds an embedded title to bot's response message.

## Syntax
```
$title[Text;(Index)]
```

### Parameters
- `Text` `(Type: String || Flag: Emptiable)`: The text to set the title as. It cannot exceed more than 256 characters.
- `Index` `(Type: Integer || Flag: Optional)`: What [embed index](../resources/embedIndexes.md) the title should belong to, defaults to `1`.

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

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
  embed:
    title: This is a title!
    description: ⬆️ That is a nice title.
```
