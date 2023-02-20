# $replaceText
Replaces 'sample' with 'new' from 'text', you can choose how many 'sample' is replaced by inputting 'howMany'.

## Usage
```
$replaceText[text;sample;new;(howMany)]
```

### Parameters
- `text` `(Type: String || Flag: Emptiable)`: The text where the bot is searching for the 'sample'.
- `sample` `(Type: String || Flag: Emptiable)`: The text to replace with 'new'.
- `new` `(Type: String || Flag: Emptiable)`: The text to replace 'sample' with.
- `howMany` `(Type: Integer || Flag: Optional)`: The number of times, at most, the bot should replace the sample.  Use `-1` to replace all 'sample' in 'text' with 'new'.

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
