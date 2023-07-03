# $removeComponent
Removes a certain component from a message.

## Syntax
```
$removeComponent[Custom ID;(Message ID)]
```

### Parameters
- `Custom ID` `(Type: String || Flag: Required)`: The select-menu/button custom ID to remove from the message.
- `Message ID` `(Type: Snowflake || Flag: Vacantable)`: The message to remove the component from, uses the bot's current message if no `Message ID` is provided.
