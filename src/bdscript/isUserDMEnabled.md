# $isUserDMEnabled
Checks whether or not the bot can DM (direct message) the user. 'true' means the bot can DM the user, 'false' means it can't.

> 🗒️ **Note:** This function checks if a user has their DMs enabled by trying to send an empty message to the user, there is no official feature in Discord's API to check if a user is direct message-able. Therefore, this function isn't perfect but for the most part; it will give the correct output.

If a user is not direct message-able, it means one or more of the following:
- they have their DMs disabled in the server(s) that they share with the bot.
- they have their DMs disabled to non-friends (bots can't send friend requests).
- they don't share any servers with the bot.
- they blocked the bot.

## Usage
```php
$isUserDMEnabled[userID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| userID | The user to check the DM status of. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)


## Example
```
$nomention

$onlyIf[$isUserDMEnabled[$authorID]==true;❌ Failed to DM you. Make sure you have your DMs open!]

$dm
Hello World!
```

**If The User Is Not Direct Messageable:**

![](https://user-images.githubusercontent.com/69215413/147860837-ae2bd3b2-b146-4245-9439-e0024959ffae.png)

**If The User Is Direct Messageable:**

![](https://user-images.githubusercontent.com/69215413/147860811-32d7806a-5674-40a9-90ab-d410bb88a829.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*