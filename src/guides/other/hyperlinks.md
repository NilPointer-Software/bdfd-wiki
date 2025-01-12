# Hyperlinks
A hyperlink is clickable-text. When the user clicks on the text, it directs them to a certain URL.

## General Hyperlinks
You can use hyperlinks inside [`$description[]`](../../bdscript/description.md), [`$addField[]`](../../bdscript/addField.md), [webhook](../../guides/general/webhooks.md) content/description, [slash command](../../guides/general/interactions/slashCommands/aboutSlashCommands.md) response content, and ephemeral [`$onInteraction`](../../callbacks/onInteraction.md) response content.

### Syntax
```
[text\](link)
```
> **Note:** This is the syntax for BDScript 2 and BDScript Unstable. For the BDScript, the syntax is `[text](link)`.

> **Note:** In the case of using hyperlinks inside slash command response content or ephemeral `$onInteraction` response content, the syntax for BDScript should be used. Does not apply to hyperlinks that are inside functions that support hyperlinks. 

### Example
```
$nomention
$description[This bot is made with [Bot Designer For Discord\](https://botdesignerdiscord.com)]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example abc
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  embed: 
    description: This bot is made with <a href="https://botdesignerdiscord.com">Bot Designer For Discord</a>!
```
\

### Title Hyperlinks
Use the [$embeddedURL](../../bdscript/embeddedURL.md) function to add a hyperlink in [$title](../../bdscript/title.md).

### Author Hyperlinks
Use the [$authorURL](../../bdscript/authorURL.md) function to add a hyperlink in [$author](../../bdscript/author.md).
