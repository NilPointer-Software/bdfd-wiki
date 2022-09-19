# channelTyping
Emits the `TYPING_START` event. It shows *"Bot is typing..."* in the channel where the command was triggered.

## Syntax
```js
channelTyping()
```

### Permissions
Required permissions which the bot must have for this function to work properly.
- `sendmessages`
- `sendmessagesinthreads`
- `readmessages`

## Example
```js
channelTyping();
setResponse('Wow! I did type.');
```

![ezgif com-gif-maker](https://user-images.githubusercontent.com/95774950/190845046-416c8926-bb4f-403d-8f9f-d337a61bae58.gif)
