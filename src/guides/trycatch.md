# $try, $catch and $error
Allows handling errors in [BDScript 2](./bdscript2.md)

## Breakdown
- Use `$try` to specify functions to execute
- Optionally use `$catch` to specify what functions should be executed if one of the functions in `$try` fails.
- Use `$error[]` inside `$catch` to retrieve information about the error.
- Use `$endtry` to end `$try`

## $error[]
It can be used inside `$catch` to retrieve information about the error.\
Possible arguments:
- `command` - retrieves the name of a function that failed.
- `source` - retrieves the whole function together with arguments.
- `message` - retrieves the error message.
- `row` - retrieves the error code row number.
- `column` - retrieves the error code column number.

## Examples
### 1
```php
Hi!
$try
  Sum: $sum[$message[1];$message[2]]
  Sub: $sub[$message[1];$message[2]]
$catch
  Error occured: $error[message]
$endtry
```

Output for `$message[1]` equal to `10` and `$message[2]` equal to `5`:
```console
Hi!
Sum: 15
Sub: 5
```

Output for `$message[1]` equal to `abc` and `$message[2]` equal to `5`:
```console
Error occured: Invalid arguments!
```

### 2
In this example we won't use `$catch`
```php
$try
$time[$message]
$endtry
Time zone has been set!
```

Output for `$message` equal to `Europe/Warsaw` (correct timezone):
```console
Time zone has been set!
```

Output for `$message` equal to `Mars` (wrong timezone):
```console
Time zone has been set!
```

As you can see the output is the same because we don't handle the errors here *(there is no `$catch`)*. We just simply ignore them.
