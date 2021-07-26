# $userJoined
Returns date when given user joined the server. You can also give your own date format.

## Usage
```
$userJoined[userID;(optional) format]
```

## Example
```
$nomention
$userJoined[$authorID]
```

![example](https://user-images.githubusercontent.com/69215413/127031755-17bba8d1-2028-41f6-a305-8074879c681d.png)

## Format
The `format` allows you to customize the date format.

- `Monday` - Day
- `January` - Month
- `3:04` Time
- `2006` - Year
- `2` - Day Of The Month

`$userJoined[$authorID;January 2 (Monday), 2006 at 3:04]` would return Month DayOfTheMonth (Day), Year at Time.
