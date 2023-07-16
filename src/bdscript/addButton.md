# $addButton
Adds a button to a message.

## Syntax
```
$addButton[New row?;Interaction ID/URL;Label;Style;(Disable?;Emoji;Message ID)]
```

### Parameters
- `New row?` `(Type: Bool || Flag: Required)`: If set to `yes`, the button will appear in a new row. If set to `no`, the button will appear in the same row as the previous button.
    > A message can have a maximum of 25 buttons (5 rows of 5 buttons).
- `Interaction ID/URL` `(Type: String, URL || Flag: Required)`: Depending on the button type, you either set it to `Interaction ID` which is then used in `$onInteraction[ID]` callback or `URL` if it's a link button.
- `Label` `(Type: String || Flag: Emptiable)`: The text value visible on the button.
- `Style` `(Type: Enum || Flag: Required)`: It's used to specify the button's background color. If the button has a link/URL, you **have to** set the value to `link`. Check [this section](#button-style) for more details.
- `Disable?` `(Type: Bool || Flag: Vacantable)`: If set to `yes`, the button can't be pressed. Defaults to `no`.
- `Emoji` `(Type: Emoji || Flag: Vacantable)`: Adds an emoji inside the button. Emojis have to be either pasted as *unicode*, *alias* or be in the following format `<:emoji name:emoji ID>`.
- `Message ID` `(Type: Snowflake || Flag: Vacantable)`: Adds the button to the provided message ID. It's important to note that the provided message ID author **has to** be the bot.

> Interactive buttons can't have duplicated `ID`'s in the same message. So for example, you can't have two buttons with the ID set to `test`.

> If `URL` is used in the `Interaction ID/URL` argument, it **has to** start with `http://` or `https://`.

## Button Style
Buttons can have different styles _(background colors)_.
Here, are all possible values for the `style` function argument.
- `primary` - Blue button
- `secondary` - Gray button
- `success` - Green button
- `danger` - Red button
- `link` - Redirect button

![example](https://github.com/Rainb0wKey/bdfd-wiki/assets/113303649/c92baa50-512d-4e85-883e-65ba40ae7ab4)

> If `link` style is used, the button **won't send** any interactions!

## Example
```
$nomention
Hi
$addButton[no;test;Say hello!;primary;no;]
```
![example](https://user-images.githubusercontent.com/113303649/209844908-dd5b8166-e597-4823-87a3-25c51699bce5.png)

> For more info, see the [Buttons Guide](../guides/general/interactions/buttons/aboutButtons.md).
