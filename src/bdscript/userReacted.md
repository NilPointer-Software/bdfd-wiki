# $userReacted
Checks if the user reacted to a message, with the provided 'emoji'.
> 🧙‍♂️ 'true' means the user did react with the emoji, otherwise 'false' is returned.

## Usage
```
$userReacted[channelID;messageID;userID;emoji]
```

### Breakdown
- `channelID` - The channel where the message is located.
- `messageID` - The message to check the reactions for.
- `userID` - The user that should of reacted.
- `emoji` - The emoji that the user should of reacted with.

## Example
```
$nomention
$userReacted[$channelID;9213992398838926;3894834783463753;🧙‍♂️]
```

![example](https://user-images.githubusercontent.com/69215413/125123192-56d5dc00-e0c4-11eb-8074-38d34c9c24b3.png)
