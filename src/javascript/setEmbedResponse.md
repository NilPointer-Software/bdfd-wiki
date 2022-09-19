# setEmbedResponse
Sends an embedded message to the current channel.

## Syntax
```js
setEmbedResponse(title, description, footer)
```

### Parameters
- `title` : Adds a title to the embed.
- `description` : Adds a description to the embed.
- `footer` : Adds a footer to the embed.

> 📌 All parameters are optional.

### Permissions
Required permissions which the bot must have for this function to work properly.
- `embedlinks`
- `sendmessages`
- `sendmessagesinthreads`
- `readmessages`

##  Example
```js
const date = new Date().toDateString();
setEmbedResponse('Hey' , 'This is an Embed!', 'Executed in ' + date);
```

![Screenshot_20220917_005110](https://user-images.githubusercontent.com/95774950/190715616-324db8db-8e68-41db-9daa-73ad0d852fe4.png)
