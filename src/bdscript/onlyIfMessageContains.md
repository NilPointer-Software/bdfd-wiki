# $onlyIfMessageContains
The command can only be executed if the 'text' contains all the 'indexes', otherwise the 'errorMessage' is returned.

## Usage
```
$onlyIfMessageContains[message;word;...;errorMessage]
```

### Parameters 
- `text` `(Type : String || Flag : Emptiable)` : The text to check.
- `indexes` `(Type : String || Flag : Emptiable)` : The phrases that the text must contain, separate phrases using `;`.
- `errorMessage` `(Type : String || Flag : Emptiable)` : The message that is returned if the text doesn't contain all the provided indexes.
