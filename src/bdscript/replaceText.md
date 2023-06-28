# $replaceText
Replaces 'Sample' with 'New' from 'Text', you can choose how many 'Sample' is replaced by inputting 'Amount'.

## Syntax
```
$replaceText[Text;Sample;New;(Amount)]
```

### Parameters
- `Text` `(Type: String || Flag: Emptiable)`: The text where the bot is searching for the 'Sample'.
- `Sample` `(Type: String || Flag: Emptiable)`: The text to replace with 'New'.
- `New` `(Type: String || Flag: Emptiable)`: The text to replace 'Sample' with.
- `Amount` `(Type: Integer || Flag: Optional)`: The number of times, at most, the bot should replace the sample. Use `-1` to replace all 'Sample' in 'Text' with 'New'.

## Examples

**Example #1:**
- Input: `$replaceText[Hello World! Hello Earth!;Hello;Hi;1]`
- Output: `Hi World! Hello Earth!`

**Example #2:**
- Input: `$replaceText[Hello World! Hello Earth! Hello Dog!;Hello;Hi;-1]`
- Output: `Hi World! Hi Earth! Hello Dog!`

**Example #3:**
- Input: `$replaceText[Hello World! Hello Earth! Hello Dog!;Hello;Hi;-1]` or `$replaceText[Hello World! Hello Earth! Hello Dog!;Hello;Hi]`
- Output: `Hi World! Hi Earth! Hi Dog!`
