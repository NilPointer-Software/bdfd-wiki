# $removeComponent
Removes certain component from a message.

## Usage
```
$removeComponent[customID;(optional) messageID]
```

### Parameters
- `customID` `(Type : String || Flag : Required)` : The select-menu/button custom ID to remove from the message.
- `messageID` `(Type : Snowflake || Flag : Vacantable)` : The message to remove the component from, uses the bot's current message if no 'messageID' is provided.
