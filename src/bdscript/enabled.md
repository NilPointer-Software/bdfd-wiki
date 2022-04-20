# $enabled
Allows you to enable/disable commands.

## Usage
```php
$enabled[enabled;errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| enabled | 'yes' means the command is enabled, 'no' means it's disabled. | [Bool](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| errorMessage |  The message returned if the command is disabled. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

## Example
This section will explain how to disable/enable certain commands using server variables. 

1: Create a variable named `enabled` and set the value to `yes` or `no` (whatever you want the default option to be. `no` - disabled, `yes` - enabled.)

![](https://user-images.githubusercontent.com/69215413/123017732-31925f80-d39b-11eb-8e23-ca01b0dc5ed4.png)

2: Create a command for the enable command. Put this in the reply text/code section:
```
$setServerVar[enabled;yes]
I successfully enabled the __ command!
$onlyAdmin[❌ Only admins can enable commands!]
```

3: Create a command for the disable code. Put this in the reply text/code section:
```
$setServerVar[enabled;no]
I successfully disabled __ command!
$onlyAdmin[❌ Only admins can disable commands!]
```

4: In the command(s) you want the enable/disable to affect, put:
```
$enabled[$getServerVar[enabled];❌ This command is disabled!]
```

5: Now your bot has a system where servers can disable/enable command(s).

> ⚠️ **Warning:** In order to make this changeable for multiple commands, you'll need to do it multiple times (using different variable names). As this only affects the commands you put the 4th-step code in.