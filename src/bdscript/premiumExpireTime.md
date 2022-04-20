# $premiumExpireTime
Returns how long until premium expires, 'expired' (for non-Unix timestamp), and '0' (for Unix timestamp) is returned if the bot is not currently premium.

## Usage
```php
$premiumExpireTime[(unixTimestamp)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| unixTimestamp | Whether to return the expire as a unix timestamp. **\*** | [Bool](/src/resources/arguments/types.md#bool) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** If `$premiumExpireTime` is used without brackets or any arguments, a standardly formatted date is returned.

## Examples
### Example #1
```
$nomention
My premium expires on $premiumExpireTime
```
![](https://user-images.githubusercontent.com/69215413/148296712-977a53d0-6725-4719-ac30-3a9aa87699f1.png)

### Example #2
```
$nomention
My premium expires <t:$premiumExpireTime[yes]:R>
```
![](https://user-images.githubusercontent.com/69215413/148296601-449ddbe4-d5e1-40d6-92ed-37f867bc2ea2.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*