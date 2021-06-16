# Buttons
In this section you'll learn how to use the button components.

![demonstration](https://user-images.githubusercontent.com/16838075/120199057-18c2de00-c223-11eb-9198-997227082a76.png)

## Button Style
Buttons can have different styles (background colors etc.)
Here are all possible values for `style` function argument.
- primary
- secondary
- success
- danger
- link

>**Note:** if `link` style is used, the button **won't send** any interactions!

### Style examples
![button styles](https://user-images.githubusercontent.com/16838075/120202615-19f60a00-c227-11eb-8e8e-5cd3c38f6c1b.png)\
*The image was taken from [Discord Docs](https://discord.com/developers/docs/interactions/message-components#buttons-button-styles)*

## Button types
There are 2 types of buttons: `interactive` and `link`.

When an interactive button is pressed it sends an interaction which can be used together with `$onInteraction[ID]`.
Every interactive button has an `ID`. If you create `$onInteraction[ID]` callback, it will get triggered when the button with the same `ID` is pressed.
Interactive buttons can use every `style` except `link`.

Link buttons **don't send** any interactions. When they're pressed they forward the user to a website.
Link buttons **have to** set their `style` argument value to `link`.


## Adding a button
Buttons can be added to a new message or already existing message.\
`$addButton[new row (yes/no);interaction ID or url;label;style;disabled (yes/no);emoji (leave empty if not needed);messageID(optional)]`

### Function arguments breakdown
- `new row` - if set to `yes` the button will appear in a new row. If it's set to `no` the button will appear in the same row as a previous button. Check [examples](#code-examples) below.
- `interaction ID or url` - depending on a button type, you either set it to `interactionID` which is then used in `$onInteraction[ID]` callback or `URL` if it's link button.
- `label` - it's the text value visible on a button
- `style` - it's used to specify the button's background color. If the button has a link/url you **have to** set this to `link`. Check [this section](#button-style) for more details.
- `disabled` - if set to `yes` the button can't be pressed
- `emoji` - this can be left empty *(it has to be provided but it can be empty)* if you don't want emoji inside the button. Emojis have to be either pasted as *unicode* or be in this format `<:emoji name:emoji ID>`
- `messageID` - this field is **optional** which means it doesn't has to be provided. When it's provided the buttons will be added to a provided message and not to the current one. It's important to note that the message author **has to** be the bot.

>**Note:** Interactive buttons can't have duplicated `ID`s in the same message. So for example you can't have two buttons with the ID set to `test`\
>**Note:** if `url` is used in `interaction ID or url` argument, it **has to** start with `http://` or `https://`

## Editing a button
`$editButton[buttonID or URL;label;style;disabled (yes/no);emoji (leave empty if not needed);messageID(optional)`\
Arguments work exactly the same way as in [$addButton](#adding-a-button) function. `buttonID or URL` is used for finding the button.

## Removing buttons
There are two functions for this.
- `$removeButtons` - removes buttons from the current message
- `$removeButtons[messageID]` - removed button from the provided message

## Code Examples
### Creating a simple interactive button
![code example](https://user-images.githubusercontent.com/16838075/120206814-f08bad00-c22b-11eb-872c-57dfa7243524.png)

>**Note:** the last argument in `$addButton` is empty because we don't want emojis for this example

### Creating `$onInteraction[]` callback
![callback code example](https://user-images.githubusercontent.com/16838075/120206913-1022d580-c22c-11eb-9656-8bc9e7476f51.png)\
> **Note:** ID provided in `$onInteraction[]` is the same as the one provided in `$addButton[]` from [this section](#creating-a-simple-interactive-button)\
\
> **Note:** In the `$addButton[]` I used `yes` for the `new row` argument so the button would appear in the next row. Check the results below.

### Usage
#### Command execution
![demonstration](https://user-images.githubusercontent.com/16838075/120199057-18c2de00-c223-11eb-9198-997227082a76.png)
#### After pressing the button
![demonstration pressed button](https://user-images.githubusercontent.com/16838075/120207246-7d366b00-c22c-11eb-8d04-9cf569ced8ae.png)


