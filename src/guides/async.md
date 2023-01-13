# Async
Runs functions in the background. Using async features properly can optimize your code and make it faster!
> **Warning:** Async features only work in [BDScript 2](./bdscript2.md).

### Basics
- Use `$async[name]` to start an async block. The name must be unique for each block. Functions inside async blocks run in the background without blocking the command's thread.
- Use `$endasync` to end the async block.
- Use `$await[name]` to wait for the async block's result.

### Examples
#### Example #1
```php
$async[test]
  $setVar[money;0]
  $addReactions[👌]
$endasync

Money set to 0
```

#### Example #2
```php
$async[test1]
  $setVar[banned;1]
$endasync

$async[test2]
  $banID[some reason;246604909451935745]
$endasync

$await[test1]
$await[test2]

Done
```
