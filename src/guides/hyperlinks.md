# Hyperlinks
A hyperlink is clickable-text. When the user clicks on the text, it directs them to a certain URL.

## General Hyperlinks
You can use hyperlinks inside [`$description[]`](../bdscript/description.md), [`$addField[]`](../bdscript/addField.md), [webhook](../guides/webhooks.md) content/description, [slash command](../guides/slashCommands.md) response content and ephemeral [$onInteraction](../callbacks/onInteraction.md) response content.

### Syntax
```
[text\](link)
```
> **Note:** This is the syntax for BDScript 2 and BDScript Unstable. For the BDScript, the syntax is `[text](link)`.

> **Note:** In the case of using hyperlinks inside slash command response content and ephemeral message content, the syntax for BDScript should be used. Does not apply to hyperlinks that are inside functions that support hyperlinks. 

### Example
```
$nomention
$description[This bot is made with [Bot Designer For Discord\](https://botdesignerdiscord.com)]
```
![example](https://user-images.githubusercontent.com/69215413/127039004-e1a607b5-af0f-4761-9d33-954f7dcad155.png)

## Title Hyperlinks
Use the [$embeddedURL](../bdscript/embeddedURL.md) function to add a hyperlink in [$title](../bdscript/title.md).

## Author Hyperlinks
Use the [$authorURL](../bdscript/authorURL.md) function to add a hyperlink in [$author](../bdscript/author.md).
