# $message
Returns the author's message *(without the command trigger)*.

## Usage
```php
$message[(argumentNumber)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| argumentNumber | The argument/word index to get. | [HowMany](/src/resources/arguments/types.md#howmany) | [Optional](/src/resources/arguments/flags.md#optional)

- `$message` without any arguments will return the user's whole message.
- `$message[1]` will just return the first word of the author's message, `$message[2]` will just return the second word, etc.
- You can also use `$message[>]` to get the last word of the author's message.

### Slash Command Optimization
Find info about optimizing `$message[]` for slash commands [here](/src/guides/slashCommands.md#retriving-value-from-options).

## Example
*A say command:*
```
$nomention
$allowRoleMentions[] $c[Disable role mentions]
$message
```
![](https://user-images.githubusercontent.com/69215413/147864504-38a76f30-0fee-4263-87b6-f1f7472f08df.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*