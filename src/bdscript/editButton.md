# $editButton
Edits an already existing button.

## Syntax
```
$editButton[Button ID/URL;Label;Style;(Disabled;Emoji;Message ID)]
```

### Parameters 
- `Button ID/URL` `(Type: String, URL || Flag: Required)`: The required button ID or URL, you want to be edited.
- `Label` `(Type: String || Flag: Emptiable)`: The new label displayed on the button.
- `Style` `(Type: Enum || Flag: Required)`: The style of the button. All styles are listed [below](#button-style).
- `Disabled` `(Type: Bool || Flag: Vacantable)`: If set to `yes`, the button can't be pressed. Default is `no`.
- `Emoji` `(Type: Emoji || Flag: Vacantable)`: Edits / Adds an emoji inside the button. Emojis have to be either pasted as *Unicode* or be in the following format `<:emoji name:emoji ID>`.
- `Message ID` `(Type: Snowflake || Flag: Vacantable)`: Adds a button to the provided message ID. It's important to note that provided message ID author **has to** be the bot.

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


## Example
### Interaction command code
```
$nomention
$username said hello!
$editButton[test;Say hello!;primary;yes;]
$addButton[no;http://botdesignerdiscord.com;Check our website;link;no;👀]
```
![](https://user-images.githubusercontent.com/16838075/120207246-7d366b00-c22c-11eb-8d04-9cf569ced8ae.png)

> For more info, see the [Buttons Guide](../guides/general/interactions/buttons/aboutButtons.md).
