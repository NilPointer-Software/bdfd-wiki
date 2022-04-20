# $getServerInvite
Creates and returns a server's invite URL.
> ⚠️ **Warning:** The bot must have the `CREATE_INSTANT_INVITE` permission and be in the current server to create an invite.

## Usage
```php
$getServerInvite[(guildID)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| guildID | The server to get the invite for. **\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Optional](/src/resources/arguments/flags.md#optional)

## Example
```
$nomention
Here's the server invite: $getServerInvite
````