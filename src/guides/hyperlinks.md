# Hyperlinks
A hyperlink is clickable-text. When the user clicks on the text, it directs them to a certain URL.

## General Hyperlinks
You can use hyperlinks inside [`$description[]`](/src/bdscript/description.md), [`$addField[]`](/src/bdscript/addField.md) and in [webhook](/src//guides/webhooks.md) content/description.

### Syntax
```
[text\](link)
```
> **Note:** This is the syntax for BDScript 2 and BDScript Unstable. For the BDScript, the syntax is `[text](link)`.

### Example
```
$nomention
$description[This bot is made with [Bot Designer For Discord\](https://botdesignerdiscord.com)]
```
![example](https://user-images.githubusercontent.com/69215413/127039004-e1a607b5-af0f-4761-9d33-954f7dcad155.png)

## Title Hyperlinks
Use the [$embeddedURL](/src/bdscript/embeddedURL.md) function to add a hyperlink in [$title](/src/bdscript/title.md).

## Author Hyperlinks
Use the [$authorURL](/src/bdscript/authorURL.md) function to add a hyperlink in [$author](/src/bdscript/author.md).
