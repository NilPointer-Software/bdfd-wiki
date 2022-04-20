# $onInteraction
Triggered upon an interaction being emitted (e.g. a button being clicked).

## Usages
- `$onInteraction` - Command runs upon any interaction being emitted.
> **Note:** `$onInteraction` (without brackets) shall only be used once. As it replies directly to the Discord's interaction event—once it processes the data, such data becomes invalid.
- `$onInteraction[customID]` - Command runs upon the provided 'customID' being clicked/selected/interacted with.

## Custom IDs
Components (e.g. buttons and select menus), must have a custom ID. This property is defined by the developer when using [$addButton\[\]](/src/guides/buttons.md), [$newSelectMenu[]](/src/guides/selectmenu.md), etc. 
For example, if you set customID to `click_me` on a button, in `$onInteraction[]` you'd put `click_me`: `$onInteraction[click_me]`. Alternatively, you can use `$onInteraction` (without brackets) with [if statements](/src/guides/ifStatements.md) and [$customID](/src/bdscript/customID.md):
```php
$if[$customID==click_me]
Hello!
$c[Bot replies with "Hello" when the 'click_me' button is clicked by a user.]
$endif
```
> 🧙🏼‍♂️ Using `$onInteraction` (with brackets) can help save command space.

Custom IDs must be unique per component, multiple buttons on the same message must not share the same custom ID. Custom ID is a string of max 100 characters.
> Custom IDs may also be referred to as interaction IDs.

## Examples
- [Buttons](/src/guides/buttons.md)
- [Author-Only Buttons](/src/bdscript/customID.md)
- [Select Menu](/src/guides/selectmenu.md)
