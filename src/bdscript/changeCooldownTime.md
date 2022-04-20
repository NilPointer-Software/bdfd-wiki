# $changeCooldownTime
Changes the cooldown metrics for `%time-d%` (days), `%time-h%` (hours), `%time-m%` (minutes), and `%time-s%` (seconds). These can be used in cooldown error messages, its useful for translating.

## Usage
```php
$changeCooldownTime[days;hours;minutes;seconds]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| days | The suffix for 'days'. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| hours | The suffix for 'hours'. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| minutes | The suffix for 'minutes'. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| seconds | The suffix for 'seconds'. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
Hi!
$changeCooldownTime[days;hours;mins;secs]
$cooldown[1h;Please wait %time-m%!]
```
![](https://user-images.githubusercontent.com/69215413/143596756-29768539-4a23-4b0e-b122-5520489a4527.png)

## Specifications
| Scripting Mode | Status
| --- | --- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*