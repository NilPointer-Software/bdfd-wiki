# $newModal
Creates a new modal.

## Usage
```
$newModal[Modal ID;Title]
```
### Parameters
- `modal ID` `(Type: String || Flag: Required)`: ID of the `$newModal[]` which is used in `$onInteraction[]` callback.
- `title` `(Type: String || Flag: Required)`: Title displayed in the modal.

## Example
```
$nomention
$newModal[modal;User Bio]
$addTextInput[modalInput1;short;What is your name?;3;30;yes;;Mikołaj]
$addTextInput[modalInput2;short;What are your pronouns?;2;30;yes;;He/Him]
$addTextInput[modalInput3;paragraph;Can you tell us about yourself?;5;1000;no;;I am a Developer]
```
![](https://imgur.com/0Vd3Ipq.png)

> For more info, see the [Modals Guide](../guides/modals.md).