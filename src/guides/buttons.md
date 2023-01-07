# Buttons
In this section, you'll learn how to use the button components.

## Content
[**Functions**](#functions) > [**Button Style**](#button-style) > [**Button Type**](#button-type) > [**$addButton[]**](#addbutton) > [**$editButton[]**](#editbutton) > [**$removeButtons**](#removebuttons) > [**$removeButtons[]**](#removebuttons-1) > [**$removeComponent[]**](#removecomponent)

## Functions
- [`$addButton[]`](../bdscript/addButton.md)
- [`$editButton[]`](../bdscript/editButton.md)
- [`$removeButtons`](../bdscript/removeButtons.md)
- [`$removeButtons[]`](../bdscript/removeButtons.md)
- [`$removeComponent[]`](../bdscript/removeComponent.md)

## Button Style
- `primary`: Blue button
- `secondary`: Gray button
- `success`: Green button
- `danger`: Red button
- `link`: Redirect button

> If `link` style is used, the button **won't send** any interactions!

## Button type
There are 2 types of buttons : `interactive` and `link`.

When an interactive button is pressed, it sends an interaction which can be used together with `$onInteraction[ID]`.

Every interactive button has an `ID`. If you create `$onInteraction[ID]` callback, it will get triggered when the button with the same `ID` is pressed.
Interactive buttons can use every `style` except `link`.

Link buttons **don't send** any interactions. When they're pressed they forward the user to a website.
Link buttons **have to** set their `style` argument value to `link`.

# $addButton
Adds button to the response.
## Syntax
```
$addButton[new row?;interaction ID/url;label;style;(disable?;emoji;message ID)]
```
## Parameters
- `new row?`: If set to `yes` the button will appear in a new row. If it's set to `no` the button will appear in the same row as a previous button.

    > A message can have a maximum of 25 buttons (5 rows of 5 buttons).

- `interaction ID/url`: Depending on the button type, you either set it to `interaction ID` which is then used in `$onInteraction[ID]` callback or `URL` if it's a link button.
- `label`: The text value visible on the button.
- `style`: It's used to specify the button's background color. If the button has a link/url you **have to** set the value to `link`. Check [this section](#button-style) for more details.
- `disable?`: If set to `yes` the button can't be pressed. Defaults as `no`. _(Optional)_
- `emoji`: Adds an emoji inside the button. Emojis have to be either pasted as *unicode* or be in the following format `<:emoji name:emoji ID>`. _(Optional)_
- `message ID`: Adds a button to the provided message ID. It's important to note that provided message ID author **has to** be the bot. _(Optional)_

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
Edits already existing button.

## Syntax
```
$editButton[interaction ID/url;label;style;(disable?;emoji;message ID)]
```

## Parameters
- `interaction ID/url`: Depending on the button type, you either set it to `interaction ID` which is then used in `$onInteraction[ID]` callback or `URL` if it's a link button.
- `label`: The text value visible on the button.
- `style`: It's used to specify the button's background color. If the button has a link/url you **have to** set the value to `link`. Check [this section](#button-style) for more details.
- `disable?`: If set to `yes` the button can't be pressed. Defaults as `no`. _(Optional)_
- `emoji`: Edits an emoji inside the button. Emojis have to be either pasted as *unicode* or be in the following format `<:emoji name:emoji ID>`. _(Optional)_
- `message ID`: Edits a button to the provided message ID. It's important to note that provided message ID author **has to** be the bot. _(Optional)_
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
Removes all buttons from the specified message id.
## Syntax
```
$removeButtons[message ID]
```
## Parameters
- `message ID`: Removes buttons from the provided message ID. It's important to note that provided message ID author **has to** be the bot.
## Example
```
$nomention
$username removed all buttons from the specified message id
$removeButtons[$message]
```
![example](https://user-images.githubusercontent.com/113303649/210875885-aa20517e-1c37-4206-8eee-eefa765eb40a.png)

# $removeComponent
Removes certain component from a message.
## Syntax
```
$removeComponent[interaction ID;(message ID)]
```
> This function supports [select-menu](../guides/selectmenu.md) and [button](../guides/buttons.html).
## Parameters
- `interaction ID`: The button interaction ID to remove from the message. 
- `message ID`: Removes the button from the provided message ID. It's important to note that provided message ID author **has to** be the bot. _(Optional)_
## Example
```
$nomention
$username successfully removed the button!
$removeComponent[test;$message]
```


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
