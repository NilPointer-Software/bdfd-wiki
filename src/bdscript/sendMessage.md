# $sendMessage
Sends a new message to the current channel.

## Syntax
```
$sendMessage[Text;(Return message ID?)]
```

### Parameters 
- `Text` `(Type: String || Flag: Required)`: The text to send in the new message.
- `Return message ID?` `(Type: Bool || Flag: Optional)`: Whether to return the ID of the newly sent message, in another message. Defaults to `no`.

## Examples
### Example #1
```
$nomention
$sendMessage[This is message #1!]
$sendMessage[This is message #2!]
$sendMessage[This is message #3!]
```
![example1](https://user-images.githubusercontent.com/69215413/126246807-7beaac06-4fd4-4ae3-a944-dcc66f7c0774.png)


### Example #2
```
$nomention
$sendMessage[This is message #1!;yes]
$sendMessage[This is message #2!;yes]
```
![example2](https://user-images.githubusercontent.com/69215413/126246945-2fb29b3f-ab58-4de3-8341-a56a574db423.png)
