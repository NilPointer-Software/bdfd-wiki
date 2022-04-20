# $getCooldown
Returns how long is left on the cooldown, in seconds; can be used in the 'errorMessage' field of cooldown functions.
> 🧠 **Tip:**  This function can be used in pair with Discord's Localized [Timestamp Markdown](https://www.reddit.com/r/discordapp/comments/ob2h2l/comment/h3l4fxs/?utm_source=share&utm_medium=web2x&context=3).

## Usage
```php
$getCooldown[type]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| type | The cooldown type. | [Enum](/src/resources/arguments/types.md#enum) ? [CooldownType](/src/enumdefs/cooldownTypes.md) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$cooldown[1h;You're on cooldown until <t:$sum[$getTimestamp;$getCooldown[type]]>!]
Hello World!
```
> ⚠️ **Warning:** This example should be used in [BDScript 2](/src/guides/scriptingModes.md).