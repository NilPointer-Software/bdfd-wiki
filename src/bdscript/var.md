# $var
Can be used to save a value temporary. It doesn't require setting up a new variable in the app. The data is removed after the command is executed. If value is provided the variable is set otherwise the value is retrieved. 

## Usage
```
$var[Name;(Value)]
```

## Example
1. Saving the user's message into the temporary variable `message`.
> 🧙‍♂️ There we will make so that the entire message is in lower case.
2. Saving the ID of the message into the `id` temporary variable sent with `$sendMessage` (where the value of the `message` temporary variable will be passed).
3. Adding a button to a sent message.

```
$var[message;$toLowercase[$message]]
$var[id;$sendMessage[$var[message];yes]]
$addButton[no;interactionID;Example;secondary;no;;$var[id]]
```
![Example](https://user-images.githubusercontent.com/70456337/189480166-d37cbdb8-05ce-44e8-8f2e-14d030baa9a9.png)
