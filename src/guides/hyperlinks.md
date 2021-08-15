# Hyperlinks
A hyperlink is clickable-text. When the user clicks on the text, it directs them to a certain URL.

## General Hyperlinks
You can use this method inside of `$description[]` and the `$addField[]` value field.

### Sytnax
```
[text](link)
```
> **Note:** If you are using BDScript 2 or get a error while using hyperlinks, add a `\` to the left bracket of the hyperlink: `[text\](link)`.

### Example
```
$nomention
$description[This bot is made with [Bot Designer For Discord\](https://botdesignerdiscord.com)]
```
![example](https://user-images.githubusercontent.com/69215413/127039004-e1a607b5-af0f-4761-9d33-954f7dcad155.png)

## Title Hyperlinks
Use the [$embeddedURL](https://nilpointer-software.github.io/bdfd-wiki/bdscript/embeddedURL.html) function to add a hyperlink in [$title](https://nilpointer-software.github.io/bdfd-wiki/bdscript/title.html).

## Author Hyperlinks
Use the [$authorURL](https://nilpointer-software.github.io/bdfd-wiki/bdscript/authorURL.html) function to add a hyperlink in [$author](https://nilpointer-software.github.io/bdfd-wiki/bdscript/title.html).
