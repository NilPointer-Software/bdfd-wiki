# $editButton
Edits an already existing button.

## Syntax
```
$editButton[Button ID/URL;Label;Style;(Disabled;Emoji;Message ID)]
```

### Parameters 
- `Button ID/URL` `(Type: String, URL || Flag: Required)`: The required button ID or URL, you want to be edited.
- `Label` `(Type: String || Flag: Emptiable)`: The new label displayed on the button.
- `Style` `(Type: Enum || Flag: Required)`: The style of the button. All styles are listed [below](#button-styles).
- `Disabled` `(Type: Bool || Flag: Vacantable)`: If set to `yes`, the button can't be pressed. Default is `no`.
- `Emoji` `(Type: Emoji || Flag: Vacantable)`: Edits / Adds an emoji inside the button. Emojis have to be either pasted as *Unicode* or be in the following format `<:emoji name:emoji ID>`.
- `Message ID` `(Type: Snowflake || Flag: Vacantable)`: Adds a button to the provided message ID. It's important to note that provided message ID author **has to** be the bot.

### Button styles
- `primary` - Blue button
- `secondary` - Gray button
- `success` - Green button
- `danger` - Red button
- `link` - Redirect button

> If the `link` style is used, the button **won't send** any interactions!

#### Preview
![preview](https://user-images.githubusercontent.com/111157596/239689749-49244b9d-4539-4159-9f51-b09425d8b3ca.png)

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
