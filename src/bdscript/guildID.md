# $guildID
Returns a server/guild's ID.

## Usage
```php
$guildID[(name)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| name | The name of the server to get the ID of. **\***  **\***​**\*** | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

**\*** If just `$guildID` is used without brackets, then the current server's ID is returned.

**\***​**\*** Your bot must be present in the server with the provided `name` to get the ID of it. Keep in mind, this argument is case-sensitive.

## Example
### Example #1
```
$nomention
$guildID
```
![](https://user-images.githubusercontent.com/69215413/147856770-ca55fb3f-6090-475b-b886-8ef62810eceb.png)

### Example #2
```
$nomention
$guildID[Cool Server]
```
![](https://user-images.githubusercontent.com/69215413/147856770-ca55fb3f-6090-475b-b886-8ef62810eceb.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*