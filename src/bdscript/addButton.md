# $addButton
Adds button to the response.

## Syntax
```
$addButton[new row;interaction ID/url;label;style;(disable?;emoji;message ID)]
```

### Parameters

| Argument            | Description                                                                                                                             | Type        | Flag       |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------|-------------|------------|
| new row             | If set to `yes`, the button will appear in a new row. If set to `no`, the button will appear in the same row as a previous button.       | Bool        | Required   |
| interaction ID/url  | Depending on the button type, set it to the interaction ID to be used in the `$onInteraction[ID]` callback, or set it to a URL if it's a link button. | String, URL | Required   |
| label               | The text value visible on the button.                                                                                                   | String      | Emptiable  |
| style               | Used to specify the button's background color. If the button has a link/URL, it must be set to `link`. Refer to the [button style section](#button-style) for more details. | Enum        | Required   |
| disable?            | If set to `yes`, the button cannot be pressed. Defaults to `no`.                                                                        | Bool        | Vacantable |
| emoji               | Adds an emoji inside the button. Emojis can be pasted as *unicode* or in the format `<:emoji name:emoji ID>`.                           | Emoji       | Vacantable |
| message ID          | Adds a button to the provided message ID. Note that the author of the provided message ID must be the bot.                              | Snowflake   | Vacantable |


### Note :
1- A message can have a maximum of 25 buttons (5 rows of 5 buttons).

2- Interactive buttons can't have duplicated `ID`'s in the same message. So for example, you can't have two buttons with the ID set to `test`.

3- If `url` is used in `interaction ID/url` argument, it **has to** start with `http://` or `https://`

## Button Style
Buttons can have different styles _(background colors)_.
Here, are all possible values for `style` function argument.

| Style      | Color    |
|------------|----------|
| primary    | Blue     |
| secondary  | Gray     |
| success    | Green    |
| danger     | Red      |
| link       | Redirect |


### Note :  If `link` style is used, the button **won't send** any interactions!

## Example
```
$nomention
Hi
$addButton[no;test;Say hello!;primary;no;]
```
![example](https://user-images.githubusercontent.com/113303649/209844908-dd5b8166-e597-4823-87a3-25c51699bce5.png)

> For more info, see the [Button Guide](../guides/general/interactions/buttons/aboutButtons.md).
