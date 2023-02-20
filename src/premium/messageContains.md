# $messageContains
*(for premium bots)*

`$messageContains[]` is a [callback](../callbacks/introduction.md) that allows you to create a trigger with multiple phrases. In addition, the bot also looks for those phrases anywhere in the author's message. This feature is great for creating an auto-response or auto-moderation system. 

## Usage
```
$messageContains[word;...]
```

### Parameters
- `word` `(Type: String || Flag: Required)`: The phrases/words the bot checks for. Separate phrases using `;`.

## Example
1. Create a new command with command trigger set as `$messageContains[]`.
2. Put text in the reply message/code.

    ![example](https://user-images.githubusercontent.com/69215413/114110028-8d714000-98a4-11eb-9e75-6d6ea5882756.png)

Now, let's say in chat someone typed : `Hello Bot!`, `Hello`, `Hey Everyone!`, `Hi Noituri` etc. The bot would respond with "Hello there! How are you?".
