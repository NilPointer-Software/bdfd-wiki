# $messageContains
*(for premium bots)*

`$messageContains[]` is a [callback](https://nilpointer-software.github.io/bdfd-wiki/callbacks/introduction.html) that allows you to create a trigger with multiple phrases. In addition, the bot also looks for those phrases anywhere in the author's message. This feature is great for creating a auto-response or auto-moderation system. 

## Usage
```$messageContains[phrase1;(optional) phrase2;(optional) etc]```

### Breakdown
`phrase1` - The first phrase the bot checks for.

`phrase2`/`etc` - You can add multiple phrases if you would like. These fields are optional.

## Example
**a.** Make the command trigger `$messageContains[]`

**b.** Put text in the reply message/code
![image](https://user-images.githubusercontent.com/69215413/114110028-8d714000-98a4-11eb-9e75-6d6ea5882756.png)

Now, let's say in chat someone typed: `Hello Bot!`, `Hello`, `Hey Everyone!`, `Hi Noituri`, etc. The bot would respond with "Hello there! How are you?".
