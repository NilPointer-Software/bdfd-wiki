# Buttons
In this section, you'll learn how to use the button components.

![demonstration](https://user-images.githubusercontent.com/16838075/120199057-18c2de00-c223-11eb-9198-997227082a76.png)

## Button Style
Buttons can have different styles _(background colors)_.
Here, are all possible values for `style` function argument.
- primary
- secondary
- success
- danger
- link

> 📝 If `link` style is used, the button **won't send** any interactions!

### Style examples
![button styles](https://user-images.githubusercontent.com/16838075/120202615-19f60a00-c227-11eb-8e8e-5cd3c38f6c1b.png)\
*The image was taken from [Discord Docs](https://discord.com/developers/docs/interactions/message-components#buttons-button-styles)*

## Button types
There are 2 types of buttons : `interactive` and `link`.

When an interactive button is pressed, it sends an interaction which can be used together with `$onInteraction[ID]`.

Every interactive button has an `ID`. If you create `$onInteraction[ID]` callback, it will get triggered when the button with the same `ID` is pressed.
Interactive buttons can use every `style` except `link`.

Link buttons **don't send** any interactions. When they're pressed they forward the user to a website.
Link buttons **have to** set their `style` argument value to `link`.


## Adding a button
Buttons can be added to a new message or already existing message.
```
$addButton[New row;Button ID/URL;Label;Style;(Disabled;Emoji;Message ID)]
```

### Function arguments breakdown
- `new row` - If set to `yes` the button will appear in a new row. If it's set to `no` the button will appear in the same row as a previous button. Check [examples](#examples) below.

    > 📝 A message can have a maximum of 25 buttons (5 rows of 5 buttons).

- `button ID/url` - Depending on a button type, you either set it to `interactionID` which is then used in `$onInteraction[ID]` callback or `URL` if it's link button.
- `label` - It's the text value visible on a button
- `style` - It's used to specify the button's background color. If the button has a link/url you **have to** set this to `link`. Check [this section](#button-style) for more details.
- `disabled` - If set to `yes` the button can't be pressed. Defaults as `no`. _(Optional)_
- `emoji` - Adds an emoji inside the button. Emojis have to be either pasted as *unicode* or be in this format `<:emoji name:emoji ID>`. _(Optional)_
- `message ID` - Adds a button to the provided message ID. It's important to note that provided message ID author **has to** be the bot. _(Optional)_

>**Note:** Interactive buttons can't have duplicated `ID`'s in the same message. So for example, you can't have two buttons with the ID set to `test`\
\
>**Note:** If `url` is used in `interaction ID or url` argument, it **has to** start with `http://` or `https://`

## Editing a button
```
$editButton[Button ID/URL;Label;Style;(Disabled;Emoji;Message ID)]
```
Arguments work exactly the same way as in [$addButton](#adding-a-button) function. `Button ID/URL` is used for finding the button.

## Removing buttons
Removing button from a message can be done using these three functions :
- [`$removeButtons`](../bdscript/removeButtons.md)
- [`$removeButtons[messageID]`](../bdscript/removeButtons.md)
- [`$removeComponent[Custom ID;(Message ID)]`](../bdscript/removeComponent.md)

## Examples
#### Creating a simple interactive button
![code example](https://user-images.githubusercontent.com/16838075/120206814-f08bad00-c22b-11eb-872c-57dfa7243524.png)

>**Note:** The last argument in `$addButton` is empty because we don't want emojis for this example

#### Creating `$onInteraction[]` callback
![callback code example](https://user-images.githubusercontent.com/16838075/120206913-1022d580-c22c-11eb-9656-8bc9e7476f51.png)
> **Note:** ID provided in `$onInteraction[]` is the same as the one provided in `$addButton[]` from [this section](#creating-a-simple-interactive-button)\
\
> **Note:** In `$addButton[]`, `yes` is being used for the `new row` argument so that the button would appear in the next row. Check the output below.

### Output
#### Command execution
![demonstration](https://user-images.githubusercontent.com/16838075/120199057-18c2de00-c223-11eb-9198-997227082a76.png)
#### After pressing the button
![demonstration pressed button](https://user-images.githubusercontent.com/16838075/120207246-7d366b00-c22c-11eb-8d04-9cf569ced8ae.png)
