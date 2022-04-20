# $sendMessage
  *For embeds, see [$sendEmbedMessage](./bdscript/sendEmbedMessage.md).*

Sends a new message apart from the default response.

## Usage
```php
$sendMessage[text;(returnMessageID)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| text | The text to send in the new message. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| returnMessageID | Whether to return the message's ID in another message. **\*** | [Bool](/src/resources/arguments/types.md#bool) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** The default value of `returnMessageID` is `no`.

## Examples
### Example #1
```
$nomention
$sendMessage[This is message #1!]
$sendMessage[This is message #2!]
$sendMessage[This is message #3!]
```
![](https://user-images.githubusercontent.com/69215413/126246807-7beaac06-4fd4-4ae3-a944-dcc66f7c0774.png)

### Example #2
```
$nomention
$sendMessage[This is message #1!;yes]
$sendMessage[This is message #2!;yes]
```
![](https://user-images.githubusercontent.com/69215413/126246945-2fb29b3f-ab58-4de3-8341-a56a574db423.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*