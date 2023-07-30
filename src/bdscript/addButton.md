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

```discord yaml
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Buttons:
  components: 
    - 
      - type: primary
        label: Primary
      - type: primary
        label: Primary
        disabled: true
    - 
      - type: success
        label: Success
      - type: success
        label: Success
        disabled: true
    - 
      - type: destructive
        label: Danger
      - type: destructive
        label: Danger
        disabled: true
    - 
      - type: secondary
        label: Secondary
      - type: secondary
        label: Secondary
        disabled: true
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Other Buttons:
  components: 
    - 
      - type: secondary
        label: Link
        url: https://nilpointer-software.github.io/bdfd-wiki/nightly/
      - type: secondary
        label: Link
        disabled: true
        url: https://nilpointer-software.github.io/bdfd-wiki/nightly/
    - 
      - type: secondary
        label: Emoji
        emoji: https://em-content.zobj.net/thumbs/120/mozilla/36/heavy-black-heart_2764.png
```

> If `link` style is used, the button **won't send** any interactions!

## Example
```
$nomention
Hello
$addButton[no;test;Say hello!;primary;no;]
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hello
  components:
  - 
     - type: primary
       label: Say hello!
```

> For more info, see the [Buttons Guide](../guides/general/interactions/buttons/aboutButtons.md).
