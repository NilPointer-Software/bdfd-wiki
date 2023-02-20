# $noMentionMessage
Returns the user's message without any mentions.

## Usages
There are 2 usages of the `$noMentionMessage` function.

### Usage #1
```
$noMentionMessage
```
Returns the user's full message *(without mentions)*.

### Usage #2
```
$noMentionMessage[argumentNumber]
```

#### Parameters 
-`argumentNumber` `(Type: HowMany || Flag: Required)`: Returns the argument matching the provided number *(excluding mentions)*.

> 🧙‍♂️ For example, `$noMentionMessage[1]` would just return the first word of the message. You can also use `$noMentionessage[>]` to get the last argument/word of the user's message.

## Example
```
$nomention
$noMentionMessage
```

![example](https://user-images.githubusercontent.com/69215413/123551762-2182d300-d741-11eb-8d98-1d2e4619dfb0.png)
