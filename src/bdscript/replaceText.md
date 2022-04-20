# $replaceText
Replaces 'sample' with 'new' from 'text', you can choose how many 'sample' is replaced by inputting 'howMany'.

## Usage
```php
$replaceText[text;sample;new;howMany]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| text | The text to replace 'sample' with 'new'. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)
| sample | The text to replace with 'new'. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)
| new | The text to replace 'sample' with. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)
| howMany | How many times to replace 'sample' with 'new'. **\*** | [Integer](/src/resources/arguments/types.md#integer) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** Use `-1` in `howMany` to replace all 'sample' in 'text' with 'new', or exclude the `howMany` field which will do the same thing.

## Examples
### Example #1
- Input: `$replaceText[Hello World! Hello Earth!;Hello;Hi;1]`
- Output: `Hi World! Hello Earth!`

### Example #2
- Input: `$replaceText[Hello World! Hello Earth!;Hello;Hi;-1]`, `$replaceText[Hello World! Hello Earth!;Hello;Hi]`, or `$replaceText[Hello World! Hello Earth!;Hello;Hi;2]`
- Output: `Hi World! Hi Earth!`

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*