# $alternativeParsing
Changes the way how arguments are read.

## Usage
```
$alternativeParsing
```

## Example
1. Create two commands and set the trigger `hello` for one command and `helloworld` for the other.
2. Add the `$alternativeParsing` function to the command code with the `hello` trigger.
3. Execute commands
![With](https://user-images.githubusercontent.com/70456337/189479524-f534454d-b8b6-406f-8465-1d3b314f7449.png)

### Without `$alternativeParsing`
What happens if we remove this function from the code?
![Without](https://user-images.githubusercontent.com/70456337/189479541-ad8c6a5a-4f8d-4800-9007-986a3fee0b75.png)

> ⚠️ This function was added at the end of 2019 as an experiment, and it can be unstable and break your commands. You should not use `$alternativeParsing` when making your bot.
