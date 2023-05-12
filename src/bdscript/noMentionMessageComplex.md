# $noMentionMessage[]
Returns an argument from the user's message omitting any mentions.

## Syntax
```
$noMentionMessage[Argument number]
```

### Parameters 
- `Argument number` `(Type: HowMany || Flag: Required)`: Returns the argument matching the provided number *(excluding mentions)*.

> 🧙‍♂️ For example, `$noMentionMessage[1]` would just return the first word of the message, ignoring any possible mentions before. You can also use `$noMentionMessage[>]` to get the last argument/word of the user's message.

## Example
```
$nomention
1. $noMentionMessage[1]
3. $noMentionMessage[3]
Last: $noMentionMessage[>]
```
![example](https://user-images.githubusercontent.com/111157596/232108897-109e42ec-69d0-486c-bd1f-501aa783ed4a.png)
