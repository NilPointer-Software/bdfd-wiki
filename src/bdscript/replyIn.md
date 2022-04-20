# $replyIn
Delays the code execution for a certain duration.

## Usage
```php
$replyIn[delay]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| delay | How long the execution is delayed. **\*** | [Duration](/src/resources/arguments/types.md#duration) | [Required](/src/resources/arguments/flags.md#required)

**\*** `delay` can't be more than 40 minutes or less than 1 second.

## Examples
### Example #1: Command Delay
*Delaying the whole command:*
```
$replyIn[5s]
Hi $username!
```

### Example #2: Scoped Delay
*Delaying a certain piece of code:*
> ⚠️ **Warning:** Using [`$async[]`](/src/guides/async.md) requires [BDScript 2](/src/guides/scriptingModes.md) enabled!

> 🗒️ **Note:** `$replyIn[]` should be treated as a Limiter, in the sense of [Limiter Hoisting](/src/guides/scriptingModes.md#limiter-hoisting), when used in BDScript 2 or BDScript Unstable.

```
First message $c[This response is returned right away]
$async[a]
  $replyIn[5s]
  $sendMessage[Second message] $c[This response is returned after 5s]
$endasync

$async[b]
  $replyIn[10s]
  $sendEmbedMessage[$channelID;;Message 3;;This is message 3 but embedded!]
$endasync
```
> 🗒️️ **Note:** Regular text or embed functions will not be parsed as a message. You must use functions like [$sendMessage[]](./sendMessage.md), [$sendEmbedMessage[]](./sendEmbedMessage.md), etc in [`$async[]`](/src/guides/async.md).

![](https://user-images.githubusercontent.com/69215413/148702468-04aec950-77b5-4439-8d5f-4fee5e463b4d.png)

## Specifications
### Command Delays
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*

### Scoped Delays
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ❌ |
| BDScript 2 | ✅ |
| BDScript Unstable | ❌ |

*✅ Supported | ❌ Unsupported*