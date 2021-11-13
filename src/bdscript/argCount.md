# $argCount
Returns how many words (aka arguments) are in the provided text.

## Usage
```
$argCount[text]
```

### Breakdown
- `text` - The text to get word count for.

## Examples
### Example #1
```
$argCount[$message]
```
> 🧙‍♂️ Returns the word count of the user's message.

### Example #2
```
$argCount[Hello World] $c[Returns 2]
```

### Example #3
```
$argCount[] $c[Returns 0]
```