# Error Handling
In BDScript 2 you can handle errors returned by functions or limiters (such as `$cooldown[]` or `$onlyIf[]`).

## Error Handling Functions
### $try
Used to open the Error Handling block.
### $endtry
Used to close the Error Handling block.
### $catch
Used to create a sub-block between `$try` and `$endtry` that will contain the code that will be executed when an error occurs.
### $error[]
Used in the `$catch` block to return error information.
#### Possible Arguments
- `command` - returns the name of the function that returned the error.
- `message` - returns the error message that was received.
- `source` - returns the content of the line where the error occurred.
- `row` - returns the number of the row in the code where the error occurred.
- `column` - returns the number of the column in the code where the error occurred.

## Examples
### Function Error
```
$nomention

$try
  $color[FFFFFF]
  $title[Hi]
  $description[Some broken code;]
$catch
  $color[E74C3C]
  $title[Error Handling]
  $addField[Function:;$error[command]]
  $addField[Error:;$error[message]]
$endtry
```
![Function Error](https://user-images.githubusercontent.com/70456337/194721708-b8062ac5-7ef3-48af-b412-1d66381add44.png)
### Limiter Error
As a way to use Error Handling with Limiter Errors, we'll use `$cooldown[]`. With the help of Error Handling, we can make a nice cooldown error message.

To handle only the error of our limiter, we will use a [temporary variable](../bdscript/var.md) and [if statements](./ifStatements.md).
If `$cooldown[]` returns an error, the value of the temporary variable will be set to `true` (in which case our nice error message will be sent).

> **Note**: The `error message` argument in `$cooldown[]` must be left blank.

```
$nomention

$var[cooldownError;false]

$try
  $cooldown[3m;]
$catch
  $var[cooldownError;true]
$endtry

$if[$var[cooldownError]==false]
Hey $username, are you making an example for the guide?
$else
$color[E74C3C]
$author[Oops, $username!]
$authorIcon[$authorAvatar]
$title[You have a cooldown!]
$description[Come back <t:$sum[$getTimestamp;$getCooldown[normal]]:R>.]
$endif
```
![Limiter Error](https://user-images.githubusercontent.com/70456337/194721773-c9487fd5-89de-4d4d-8296-a56150b94db7.png)
![Limiter Error](https://user-images.githubusercontent.com/70456337/194721785-cbbd2936-033b-4e0b-b554-6af8b3325c38.png)
