# $enabled
Allows you to enable/disable commands.

## Syntax
```
$enabled[Enabled;Error message]
```

### Parameters
- `Enabled` `(Type: Bool || Flag: Required)`: If the command should be enabled or disabled. Use `yes` to enable the command, `no` to disable it.
- `Error message` `(Type: String || Flag: Emptiable)`: The message that is returned if the command is disabled.

## Example
This section will explain how to disable/enable certain commands using server variables. 

1. Create a variable named `enabled` and set the value to `yes` or `no` (whatever you want the default option to be. `no` - disabled, `yes` - enabled.)

    ![example](https://user-images.githubusercontent.com/69215413/123017732-31925f80-d39b-11eb-8e23-ca01b0dc5ed4.png)

2. Create a command for the enable code. Put this in the reply text/code section:
      ```
     $onlyAdmin[❌ Only admins can enable commands!]
     $setServerVar[enabled;yes]
     I successfully enabled the command!
     ```

3. Create a command for the disable code. Put this in the reply text/code section:
     ```
     $onlyAdmin[❌ Only admins can disable commands!]
     $setServerVar[enabled;no]
     I successfully disabled the command!
     ```

4. In the command(s) you want the enable/disable to affect, put:
    ```
    $enabled[$getServerVar[enabled];❌ This command is disabled!]
    ```

5. Now your bot has a system where servers can disable/enable command(s).

> 📝 In order to make this changeable for multiple commands, you'll need to do it multiple times (using different variable names). As this only affects the commands you put the "affect" code in.
