# $alternativeParsing
Changes the way how triggers are read.

## Syntax
```
$alternativeParsing
```
> This function was added at the end of 2019 as an experiment, and it can be unstable and break your commands. You should not use `$alternativeParsing` when making your bot.

## Example
1. Create two commands and set the trigger `hello` for one command and `helloworld` for the other.
2.  Add the `$alternativeParsing` function to the command code with the `hello` trigger.

Code with trigger `hello`:
```
$nomention
$alternativeParsing
$description["hello"]
```
Code with trigger `helloworld`:
```
$nomention
$description["helloworld"]
```
3. Execute commands
### With $alternativeParsing
![example](https://user-images.githubusercontent.com/113303649/209946250-ddf50d47-b8a7-48c2-8404-a2a58981c36d.png)

### Without $alternativeParsing
![example](https://user-images.githubusercontent.com/113303649/209946555-3b270854-0176-4492-bd1a-2ba81bf389c1.png)
