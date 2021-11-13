# $onlyIfMessageContains
The command can only be executed if the 'text' contains all the 'indexes', otherwise the 'errorMessage' is returned.

## Usage
```
$onlyIfMessageContains[text;requiredPhrases;errorMessage]
```

### Breakdown
- `text` - The text to check.
- `requiredPhrases` - The phrases that the text must contain, separate phrases using `;`.
- `errorMessage` - The message that is returned if the text doesn't contain all the provided indexes.