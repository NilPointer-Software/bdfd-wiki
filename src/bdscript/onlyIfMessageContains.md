# $onlyIfMessageContains
Checks if the provided message contains every provided word, otherwise the provided error message is returned.

## Syntax
```
$onlyIfMessageContains[Message;Word;...;Error message]
```

### Parameters 
- `Message` `(Type: String || Flag: Emptiable)`: The text to check.
- `Word` `(Type: String || Flag: Emptiable)`: The words that the message must contain. Use semicolons `;` as a separator to separate multiple words.
- `Error message` `(Type: String || Flag: Emptiable)`: The message that is returned if the text doesn't contain all the provided words.

## Example
```
$nomention
$onlyIfMessageContains[$message;Hello;Hi;❌ Your message must contain `Hello` or `Hi`!]

$c[Put your code here.]
```
