# $editButton
Edits already existing button.

## Usage
```
$editButton[Button ID/URL;Label;Style;(Disabled;Emoji;Message ID)]
```

## Parameters 
- `Button ID/URL` `(Type : String,URL || Flag : Required)` : the required button ID or URL, you want to be edited
- `Label` `(Type : String || Flag : Emptiable)` : new label of displayed on the button 
- `Style` `(Type : Enum || Flag : Required)` : Here, are all possible values for `style` function argument.
`primary`,`secondary`,`success`,`danger`,`link`
- `Disabled` `(Type : Bool || Flag : Vacantable)` : If set to `yes` the button can't be pressed. Defaults as `no`
- `Emoji` `(Type : Emoji || Flag : Vacantable)` : edits / adds an emoji inside the button. Emojis have to be either pasted as *unicode* or be in the following format `<:emoji name:emoji ID>`.
- `Message ID` `(Type : Snowflake || Flag : Vacantable)` : Adds a button to the provided message ID. It's important to note that provided message ID author **has to** be the bot.


## Example
### Interaction command code
```
$username said hello!

$editButton[test;Say hello!;primary;yes;]

$addButton[no;http://botdesignerdiscord.com;Check our website;link;no;👀]
```
![](https://user-images.githubusercontent.com/16838075/120207246-7d366b00-c22c-11eb-8d04-9cf569ced8ae.png)

> For more info, see the [Button Guide](../guides/buttons.md).