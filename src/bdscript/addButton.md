# $addButton
Adds button to the response.

## Syntax
```
$addButton[new row?;interaction ID/url;label;style;(disabled?;emoji;message ID)]
```

## Parameters
- `new row?`: If set to `yes` the button will appear in a new row. If it's set to `no` the button will appear in the same row as a previous button.

    > 📝 A message can have a maximum of 25 buttons (5 rows of 5 buttons).

- `interaction ID/url`: Depending on the button type, you either set it to `interaction ID` which is then used in `$onInteraction[ID]` callback or `URL` if it's a link button.
- `label`: The text value visible on the button.
- `style`: It's used to specify the button's background color. If the button has a link/url you **have to** set the value to `link`. Check [this section](#button-style) for more details.
- `disabled?`: If set to `yes` the button can't be pressed. Defaults as `no`. _(Optional)_
- `emoji`: Adds an emoji inside the button. Emojis have to be either pasted as *unicode* or be in the following format `<:emoji name:emoji ID>`. _(Optional)_
- `message ID`: Adds a button to the provided message ID. It's important to note that provided message ID author **has to** be the bot. _(Optional)_

>**Note:** Interactive buttons can't have duplicated `ID`'s in the same message. So for example, you can't have two buttons with the ID set to `test`.\
\
>**Note:** If `url` is used in `interaction ID/url` argument, it **has to** start with `http://` or `https://`

## Button Style
Buttons can have different styles _(background colors)_.
Here, are all possible values for `style` function argument.
- primary
- secondary
- success
- danger
- link

> 📝 If `link` style is used, the button **won't send** any interactions!

## Example
```
$nomention
Hi
$addButton[no;test;Say hello!;primary;no;]
```
![example](https://user-images.githubusercontent.com/113303649/209844908-dd5b8166-e597-4823-87a3-25c51699bce5.png)

> For more info, see the [Button Guide](../guides/buttons.md).
