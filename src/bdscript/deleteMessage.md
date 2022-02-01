# $deleteMessage

Deletes a message

## Usage
```
$deleteMessage[channel ID;message ID]
```

## Example
```
$nomention
$var[getPing;$sendMessage[Please Wait...;yes]]
$deleteMessage[$channelID;$var[getPing]]
$description[$ping ms]
```
