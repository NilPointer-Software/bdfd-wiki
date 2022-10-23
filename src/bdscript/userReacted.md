# $userReacted
Checks if a user reacted to a message with the provided emoji. Returns "true" if the user did react otherwise, "false".

## Syntax
```
$userReacted[Channel ID;Message ID;User ID;Emoji]
```

### Parameters
- `Channel ID` : The channel where the message is located.
- `Message ID` : The message to check the reactions for.
- `User ID` : The user to check the reaction for.
- `Emoji` : The emoji of the reaction to check.

## Example
```
$nomention
$userReacted[$channelID;$message;$authorID;🍀]
```
![Screenshot_20221023_105811](https://user-images.githubusercontent.com/95774950/197375576-dbe6fc17-68cb-44ed-802a-81a16db98ce9.png)
