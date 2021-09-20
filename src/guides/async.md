# Async
Runs functions in the background. It can speed up your commands by a lot!

> **Warning:** works only in [BDScript 2](./bdscript2.md)

## Breakdown
- Use `$async[name]` to start async block. The name has to be unique. Functions inside async block run in the background without blocking the command's thread.
- Use `$endasync` to end async block.
- Use `$await[name]` to wait for the async block's result.

## Examples
### #1
```php
$async[test]
  $setVar[money;0]
  $addReactions[👌]
$endasync

Money set to 0
```

### #2
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
