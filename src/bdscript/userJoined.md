# $userJoined
Returns date when given user joined the server. You can also give your own date format.

## Usage
```
$userJoined[userID;(optional) format]
```

## Example
```
$userJoined[$authorID]
```

## Format
- The `format` allows you to customize the date format.

- `Monday` - Day
- `January` - Month
- `3:04` Time
- `2006` - Year
- `2` - Day Of The Month

`$userJoined[$authorID;January 2 (Monday), 2006 at 3:04]` would return Month DayOfTheMonth (Day), Year at Time.
