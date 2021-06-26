# $isUserDMEnabled
Checks whether or not the bot can DM the user.
> 'true' means the bot can DM the user, 'false' means it can't.

## Usage
```
$isUserDMEnabled[userID]
```

### Breakdown
`userID` - The user to check the DM status for.

## Example
```
$nomention
$onlyIf[$isUserDMEnabled[$authorID]==true;❌ Failed to DM you. Make sure you have your DMs on!]
$dm
$message
```

![example](https://user-images.githubusercontent.com/69215413/123518295-46a91000-d673-11eb-9a1e-39f9d9f83bb9.png)
