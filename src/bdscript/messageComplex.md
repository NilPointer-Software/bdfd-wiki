# $message[]
Returns an argument from the message or the input of a slash command option.

## Syntax
```
$message[Argument number;(Argument name)]
```

### Parameters 
- `Argument number` `(Type: HowMany, String || Flag: Required)`: Returns the argument matching the provided number.
- `Argument name` `(Type: String || Flag: Optional)`: Returns the input of the matching slash command option.

> 🧙‍♂️ For example, `$message[1]` would just return the first word of the message. You can also use `$message[>]` to get the last argument/word of the user's message.

### Optimization
If you want this function to work in a slash command **only**, then you can use `$message[Argument name]`. If this function should work in a normal **and** slash command, then you can use `$message[Argument number;Argument name]`.

> 🧙‍♂️ For example, `$message[message]` would just return the input of the slash command option named "message". `$message[1;text]` would return the first word of the message **or** the input of the slash command option named "text". 

Find more info about optimizing `$message[]` for slash commands [here](../guides/general/interactions/slashCommands/aboutSlashCommands.md#retrieving-value-from-options).

## Examples
### Normal command
```
$nomention
First word: $message[1]
Second word: $message[2]
Third word: $message[3]
```
![example1](https://user-images.githubusercontent.com/111157596/231827506-1436330e-1231-4eb6-97df-e2218f29ac26.png)

### Slash command
We retrieve the input of the slash command option named "message".
```
$nomention
$message[message]
```
![example2](https://user-images.githubusercontent.com/95774950/179398322-d9a27169-0030-458d-8abc-ed4462637862.png)
![example3](https://user-images.githubusercontent.com/95774950/179398327-6c1f1c00-205f-4dcf-a0ce-08cefed5c937.png)

### Normal and Slash command
We retrieve the first argument of the message or the input of the slash command option named "text".
```
$nomention
$message[1;text]
```

**Normal**

![example4](https://github.com/NilPointer-Software/bdfd-wiki/assets/111157596/4d743aaa-0b86-4cdf-aa5f-32dbfdf4057e)

**Slash**

![example5](https://github.com/NilPointer-Software/bdfd-wiki/assets/111157596/67f1202c-61d3-49f1-a055-91e21b90d934)
![example6](https://github.com/NilPointer-Software/bdfd-wiki/assets/111157596/1e381e99-bc5b-4d02-8d09-35f397c5ff75)
