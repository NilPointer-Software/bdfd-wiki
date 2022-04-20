# $noMentionMessage
Returns the user's message without any mentions.

## Usage
```php
$noMentionMessage[(argumentNumber)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| argumentNumber |  The argument/word index to get. | [HowMany](/src/resources/arguments/types.md#howmany) | [Optional](/src/resources/arguments/flags.md#optional)

- `$noMentionMessage` without any arguments will return the user's whole message.
- `$noMentionMessage[1]` will just return the first word of the author's message, `$noMentionMessage[1]` will just return the second word, etc.
- You can also use `$noMentionMessage[>]` to get the last word of the author's message.

## Example
```
$nomention
$noMentionMessage
```
![](https://user-images.githubusercontent.com/69215413/123551762-2182d300-d741-11eb-8d98-1d2e4619dfb0.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*