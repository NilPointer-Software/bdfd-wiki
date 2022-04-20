# Embeds
#### What is a embed?
A embed is a rich Discord message which can be sent by webhooks or bots.
![](https://user-images.githubusercontent.com/69215413/138980413-cdf61fd2-85f5-4e53-9d20-6e4748eb1555.png)

#### How do I create embeds?
You can use *Bot Designer for Discord*'s embed functions to create embeds:
- [$title](/src/bdscript/title.md) - The embed's title.
- [$description](/src/bdscript/description.md) - The embed's description.
- [$author](/src/bdscript/author.md) - The embed's author text.
- [$authorIcon](/src/bdscript/authorIcon.md) - The embed's author icon, must be a valid image link.
- [$authorURL](/src/bdscript/authorURL.md) - The embed's author URL, must be a valid link.
- [$thumbnail](/src/bdscript/thumbnail.md) - The embed's thumbnail image, must be a valid image link.
- [$image](/src/bdscript/image.md) - The embed's large image, must be a valid image link.
- [$footer](/src/bdscript/footer.md) - The embed's footer text.
- [$footerIcon](/src/bdscript/footerIcon.md) - The embed's footer icon, must be a valid image link.
- [$addTimestamp](/src/bdscript/addTimestamp.md) - Adds a timestamp to the embed, next to the footer.
- [$addField](/src/bdscript/addField.md) - Adds a field to the embed.

#### What are the embed limitations?
- Embed titles are limited to 256 characters
- Embed descriptions are limited to 4096 characters
- There can be up to 25 fields
- A field's name is limited to 256 characters and its value to 1024 characters
- The footer text is limited to 2048 characters
- The author text is limited to 256 characters
- The sum of all characters from all embed contents in a message can not exceed 6000 characters
- Ten embeds can be sent per message

### How do I send multiple embeds in one message?
You can send up to ten embeds per message using [embed indexes (click me for more info)](/src/resources/embedIndexes.md).