# $startThread
Creates a new thread in the provided channel.

## Syntax
```
$startThread[Name;Channel ID;Message ID;(Archive duration;Return thread/channel ID)]
```

### Parameters
- `Name` `(Type: String || Flag: Required)`: The name of the newly created thread.
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel where the thread shall be created.
- `Message ID` `(Type: Snowflake || Flag: Emptiable)`: The message from which the thread will be created. Can be left empty.
- `Archive duration` `(Type: Integer || Flag: Optional)`: The duration after which the thread will be auto-archived due to inactivity. Accepts `60` (1 hour), `1440` (1 day), `4320` (3 days), or `10080` (7 days) as input. Defaults to `60`.
- `Return thread/channel ID` `(Type: Bool || Flag: Optional)`: Whether to return the thread channel ID or not. Defaults to `no`.

### Permissions
Required permissions that the bot must have for this function to work properly:
- `createpublicthreads`

## Example
```
$nomention
I created a new thread! <#$startThread[Cool Thread;$channelID;;1440;yes]>
```
![example](https://user-images.githubusercontent.com/69215413/128615731-c61c95c1-d1ec-42cf-9964-e8722df30dfe.png)
