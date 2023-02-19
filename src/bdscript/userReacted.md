# $userReacted
Checks if a user reacted to a message with the provided emoji. Returns "true" if the user did react otherwise, "false".

## Syntax
```
$userReacted[Channel ID;Message ID;User ID;Emoji]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel where the message is located.
- `Message ID` `(Type: Snowflake || Flag: Required)`: The message to check the reactions for.
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to check the reaction for.
- `Emoji` `(Type: Emoji || Flag: Required)`: The emoji of the reaction to check.

## Example
```
$nomention
$userReacted[$channelID;$message;$authorID;🍀]
```
![Screenshot_20221023_105811](https://user-images.githubusercontent.com/95774950/197375576-dbe6fc17-68cb-44ed-802a-81a16db98ce9.png)
