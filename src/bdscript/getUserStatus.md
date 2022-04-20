# $getUserStatus
Returns the provided user's status.
> 🗒️ **Note:** The user must share at least one server with the bot for this function to work.

## Usage
```
$getUserStatus[userID]
```
> ⚠️ **Warning:** This function requires the `PRESENCE` privileged intent enabled in the *Bot Designer for Discord* application and [Discord Developer Portal](https://discord.com/developers/applications).

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| userID | The user to get the status of. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

> 🧠 **Tip:** The possible outputs for `$getUserStatus[]` are: `online`, `dnd`, `idle`, `invisible`, or `offline`. 

## Example
```
$nomention
$nickname[$mentioned[1;yes]]'s status is: $getUserStatus[$mentioned[1;yes]]
```

![](https://user-images.githubusercontent.com/69215413/124503888-68517800-dd94-11eb-93e5-c0eea7d8b055.png)