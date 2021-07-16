# $getUserStatus
Returns the provided user's status.
> 🧙‍♂️ The user must share atleast 1 server with the bot, for this function to work.

## Usage
```
$getUserStatus[userID]
```

### Breakdown
- `userID` - The user to get the status for.

### Statuses List
- online
- dnd
- idle
- offline

## Example
```
$nomention
$nickname[$mentioned[1;yes]]'s status is: $getUserStatus[$mentioned[1;yes]]
```

![example](https://user-images.githubusercontent.com/69215413/124503888-68517800-dd94-11eb-93e5-c0eea7d8b055.png)
