# $customID
Can only be used with the [$onInteraction](/src/callbacks/onInteraction.md) callback. Returns the custom ID of this interaction.

### Example
`!buttons` code:
```
$nomention
Pick a button!
$addButton[no;button1-$authorID;Button #1;primary;no;]
$addButton[no;button2-$authorID;Button #2;primary;no;]
```
> You may remove `-$authorID` from `$addButton[]` to allow all users to use the interaction, rather than just the author.

`$onInteraction` code:
```
$nomention
$if[$customID==button1-$authorID]
You picked button #1!
$editButton[$customID;Button #1;success;yes;]
$editButton[button2-$authorID;Button #2;danger;yes;]
$endif

$if[$customID==button2-$authorID]
You picked button #2!
$editButton[button1-$authorID;Button #1;danger;yes;]
$editButton[$customID;Button #2;success;yes;]
$endif
```
> You may remove `-$authorID` from the `$if[]` statement to allow all users to use the interaction, rather than just the author.

#### Result
Before pressing a button:\
![](https://user-images.githubusercontent.com/69215413/131228448-75afbbbd-3ac6-4348-8ebd-9e7661bf82df.png)

After pressing a button:\
![](https://user-images.githubusercontent.com/69215413/131228494-33298b23-b5e0-47af-b5f5-77e5ea864815.png)
