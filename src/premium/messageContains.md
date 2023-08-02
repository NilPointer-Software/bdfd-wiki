# $messageContains
*(for premium bots)*

`$messageContains[]` is a [callback](../callbacks/introduction.md) that allows you to create a trigger with multiple phrases. In addition, the bot also looks for those phrases anywhere in the author's message. This feature is great for creating an auto-response or auto-moderation system. 

## Syntax
```
$messageContains[Word;...]
```

### Parameters
- `Word` `(Type: String || Flag: Required)`: The phrases/words the bot checks for. Separate phrases using `;`.

## Example
1. Create a new command with command trigger set as `$messageContains[]`.
2. Put text in the reply message/code.

    ![example](https://user-images.githubusercontent.com/69215413/114110028-8d714000-98a4-11eb-9e75-6d6ea5882756.png)

3. Now, let's say in chat someone types : `Hello Bot!`, `Hello`, `Hey Everyone!`, `Hi Noituri` etc. The bot will respond with "Hello there! How are you?".
   ``` discord yaml
   - user_id: 246604909451935745
     username: noituri
     color: "#F1BDEE"
     content: |
       Hello

   - user_id: 566613317972394004
     username: Wiki Bot
     color: "#748BD4"
     bot: true
     verified: true
     content: |
       Hello there! How are you?

   - user_id: 729343563401265193
     username: Nicky
     color: "#EE7908"
     content: |
       Hi Noituri

   - user_id: 566613317972394004
     username: Wiki Bot
     color: "#748BD4"
     bot: true
     verified: true
     content: |
       Hello there! How are you?
    ```
