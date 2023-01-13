# Buttons
In this section, you'll learn how to use the button component.

## Content
[**Used**](#used) > [**Button Style**](#button-style) > [**Button Type**](#button-type) > [**$addButton[]**](#addbutton) > [**$editButton[]**](#editbutton) > [**$removeButtons**](#removebuttons) > [**$removeButtons[]**](#removebuttons-1) > [**$removeComponent[]**](#removecomponent) > [**Create Interaction**](#create-interaction)

## Used
- [`$addButton[]`](../bdscript/addButton.md)
- [`$editButton[]`](../bdscript/editButton.md)
- [`$removeButtons`](../bdscript/removeButtons.md)
- [`$removeButtons[]`](../bdscript/removeButtons.md)
- [`$removeComponent[]`](../bdscript/removeComponent.md)
- [`$onInteraction`](../callbacks/onInteraction.md)
- [`$onInteraction[]`](../callbacks/onInteraction.md)

## Button Style
- `primary`: Blue button
- `secondary`: Gray button
- `success`: Green button
- `danger`: Red button
- `link`: Redirect button

> If `link` style is used, the button **won't send** any interactions!

## Button Type
There are 2 types of buttons : `interactive` and `link`.

When an interactive button is pressed, it sends an interaction which can be used together with `$onInteraction[ID]`.

Every interactive button has an `ID`. A `$onInteraction[ID]` callback, will only get triggered when the button with the same `ID` is pressed.
Interactive buttons can use every `style` except `link`.

> Link buttons **don't send** any interactions. When they're pressed they forward the user to a website.
> 
> Link buttons **need to** set their `style` argument value to `link`.

# $addButton
Adds a button to the response message.
## Syntax
```
$addButton[new row?;interaction ID/url;label;style;(disable?;emoji;message ID)]
```
### Parameters
- `new row?` `(Type : Bool || Flag : Required)`: If set to `yes` the button will appear in a new row. If it's set to `no` the button will appear in the same row as a previous button.

    > A message can have a maximum of 25 buttons (5 rows of 5 buttons).

- `interaction ID/url` `(Type: String, URL || Flag: Required)`: Depending on the button type, you either set it to an `interaction ID` which is then used in the `$onInteraction[ID]` callback or a `URL` if it's a link button.
- `label` `(Type: String || Flag: Emptiable)`: The text visible on the button.
- `style` `(Type: Enum || Flag: Required)`: It's used to specify the button's background color. If the button has a link/url you **have to** set this value to `link`. Check [this section](#button-style) for more details.
- `disable?` `(Type: Bool || Flag: Vacantable)`:  If set to `yes` the button can't be pressed. Defaults as `no`.
- `emoji` `(Type: Emoji || Flag: Vacantable)`: Adds an emoji inside the button. Emojis have to be either pasted as *unicode* or be in the following format `<:emoji name:emoji ID>`.
- `message ID` `(Type: Snowflake || Flag: Vacantable)`: Adds a button to the provided message ID. It's important to note that provided message ID author **has to** be the bot.

> Interactive buttons can't have duplicated `ID`'s in the same message. So for example, you can't have two buttons with the ID set to `test`.

> If `url` is used in `interaction ID/url` argument, it **has to** start with `http://` or `https://`

## Example
```
$nomention
Hi
$addButton[no;test;Say hello!;primary;no;]
```
![example](https://user-images.githubusercontent.com/16838075/120199057-18c2de00-c223-11eb-9198-997227082a76.png)


# $editButton
Edits an already existing button.

## Syntax
```
$editButton[interaction ID/url;label;style;(disable?;emoji;message ID)]
```

### Parameters
- `interaction ID/url`: Depending on the button type, you either set it to an `interaction ID` which is then used in the `$onInteraction[ID]` callback or a `URL` if it's a link button.
- `label`: The text visible on the button.
- `style`: It's used to specify the button's background color. If the button has a link/url you **have to** set this value to `link`. Check [this section](#button-style) for more details.
- `disable?`: If set to `yes` the button can't be pressed. Defaults as `no`. _(Optional)_
- `emoji`: Edits an emoji inside the button. Emojis have to be either pasted as *unicode* or be in the following format `<:emoji name:emoji ID>`. _(Optional)_
- `message ID`: Edits a button in a message with the provided ID. It's important to note that provided message ID author **has to** be the bot. _(Optional)_
## Example
#### Trigger: `$onInteraction[test]`
```
$nomention
$username said hello!
$editButton[test;Say hello!;danger;yes;]
```
![example](https://user-images.githubusercontent.com/113303649/210611967-f15b8c9b-7bd9-4218-a89b-08e93ce7eeb3.png)


# $removeButtons
Removes all buttons from the triggered message.
## Syntax
```
$removeButtons
```
## Example
#### Trigger: `$onInteraction[test]`
```
$nomention
$username removed all buttons from this message
$removeButtons
```
![example](https://user-images.githubusercontent.com/113303649/210621352-ae7334a6-a2de-4fbe-8749-7134f9a73af3.png)

# $removeButtons
Removes all buttons from the specified message.
## Syntax
```
$removeButtons[message ID]
```
### Parameters
- `message ID`: Removes buttons from the message with the provided ID. It's important to note that provided message ID author **has to** be the bot.
## Example
```
$nomention
$username removed all buttons from the specified message id
$removeButtons[$message]
```
![example](https://user-images.githubusercontent.com/113303649/210875885-aa20517e-1c37-4206-8eee-eefa765eb40a.png)

# $removeComponent
Removes a certain component from a message.
## Syntax
```
$removeComponent[interaction ID;(message ID)]
```
> This function supports [select-menu](../guides/selectmenu.md) and [button](../guides/buttons.md).
### Parameters
- `interaction ID`: The interaction ID of the button, to remove from the message. 
- `message ID`: Removes the button from the message with the provided ID. It's important to note that provided message ID author **has to** be the bot. _(Optional)_
## Example
```
$nomention
$username successfully removed the button!
$removeComponent[test;$message]
```
![example](https://user-images.githubusercontent.com/113303649/211163378-2aaa540d-b0a1-4511-8f34-6a91260b079d.png)

![example](https://user-images.githubusercontent.com/113303649/211163615-ecffddcf-1d2b-4065-8445-9ec7ed1eb2b4.png)

# Create interaction
### Example with `$onInteraction` callback:
1. Create two commands with `!example` and `$onInteraction` triggers.
2. Paste the following code:
Code for the command with the `!example` trigger:
```
$nomention
Click the button below!
$addButton[no;test;Click;primary]
$addButton[no;button;Button disabled;secondary;yes]
$addButton[yes;https://botdesignerdiscord.com/;Link;link]
```
Code for the command with the `$onInteraction` trigger:
```
$nomention
$editButton[test;Clicked;danger;yes]
$sendMessage[$username hello!]
```

> Note that the interaction ID provided in `$onInteraction[]` is the same as the one provided in `$addButton[]`
> 
> In `$addButton[]`, `yes` is being used for the `new row` argument so that the button would appear in the next row.
3. Execute command `!example`

![example](https://user-images.githubusercontent.com/113303649/211164994-695cf7b6-b2fa-49e5-a78f-dc21db213a9a.png)

### Example with `$onInteraction[]` callback:
1. Create two commands with `!example` and `$onInteraction[test]` triggers.
2. Paste the following code:
Code for the command with the `!example` trigger:
```
$nomention
Click the button below!
$addButton[no;test;Click;primary]
$addButton[no;button;Button disabled;secondary;yes]
$addButton[yes;https://botdesignerdiscord.com/;Link;link]
```
Code for the command with the `$onInteraction[test]` trigger:
```
$nomention
$if[$customID==test]
    $editButton[test;Clicked;danger;yes]
    $sendMessage[$username hello!]
$endif
```
> Note that the interaction ID returned by `$customID` will be the same as the one provided in `$addButton[]`
> 
> In `$addButton[]`, `yes` is being used for the `new row` argument so that the button would appear in the next row.
> 
3. Execute command `!example`

![example](https://user-images.githubusercontent.com/113303649/211164994-695cf7b6-b2fa-49e5-a78f-dc21db213a9a.png)

> [How `$onInteraction`/`$onInteraction[]` works?](../callbacks/onInteraction.md)
