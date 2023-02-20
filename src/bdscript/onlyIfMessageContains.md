# $onlyIfMessageContains
The command can only be executed if the 'text' contains all the 'indexes', otherwise the 'errorMessage' is returned.

## Usage
```
$onlyIfMessageContains[message;word;...;errorMessage]
```

### Parameters 
- `message` `(Type: String || Flag: Emptiable)`: The text to check.
- `word` `(Type: String || Flag: Emptiable)`: The words that the message must contain. Separate words using `;`.
- `errorMessage` `(Type: String || Flag: Emptiable)`: The message that is returned if the text doesn't contain all the provided words.
