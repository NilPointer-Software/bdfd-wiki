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

Find more info about optimizing `$message[]` for slash commands [here](../guides/slashCommands.md#retrieving-value-from-options).

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
*We retrieve the input of the slash command option named "message".*
```
$nomention
$message[message]
```
![example2](https://github.com/xNickyDev/drafts/assets/111157596/6d805352-6aaa-42c9-9f41-c8fc37afc8b9)
![example3](https://github.com/xNickyDev/drafts/assets/111157596/f91202f6-f24e-4867-8bd6-18ae856734d3)

### Normal and Slash command
We retrieve the first argument of the message and the input of the slash command option named "text".
```
$nomention
$message[1;text]
```

**Normal**

![example4](https://github.com/xNickyDev/drafts/assets/111157596/d3166283-102d-4743-af35-94ab8ecfa826)

**Slash**

![example5](https://github.com/xNickyDev/drafts/assets/111157596/50997cea-ff1d-466c-87e0-e29f5413a8bb)
![example6](https://github.com/xNickyDev/drafts/assets/111157596/5e707981-b35b-4da7-9cac-240a3193fc2d)
