# $creationDate
Gets the creation date of a user, channel, role, etc.
> 🗒️ **Note:** The date format used is `yyyy-mm-dd`.

## Usage
```php
$creationDate[id]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| id | The channelID/userID/roleID/messageID/serverID/etc to get the creation date for. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$username[$mentioned[1;yes]]'s Creation Date: $creationDate[$mentioned[1;yes]]
```

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*