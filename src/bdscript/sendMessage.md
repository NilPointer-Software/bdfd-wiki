# $sendMessage
Sends a new message to the current channel.

## Syntax
```
$sendMessage[Text;(Return message ID?)]
```

### Parameters 
- `Text` `(Type: String || Flag: Required)`: The text to send in the new message.
- `Return message ID?` `(Type: Bool || Flag: Optional)`: Whether to return the ID of the newly sent message, in another message. Defaults to `no`.

## Example
```
$nomention
$sendMessage[Hello world!]

``` discord yaml
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
    Hello world!
```