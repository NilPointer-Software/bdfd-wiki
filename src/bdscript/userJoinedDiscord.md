# $userJoinedDiscord
Returns the date when given user created their Discord account. You can also give your own date format.

## Usage
```
$userJoinedDiscord[userID;(optional) format]
```

## Example
```
$nomention
$userJoinedDiscord[$authorID]
```

![example](https://user-images.githubusercontent.com/69215413/127032089-ef8aa439-89c9-46b2-a2e4-cdf54ab7fa6b.png)

## Format
The 'format' option allows you to customize the date format.

- `Monday` - Day
- `January` - Month
- `3:04` - Time
- `2006` - Year
- `2` - Day Of The Month

`$userJoinedDiscord[$authorID;January 2 (Monday), 2006 at 3:04]` would return Month DayOfTheMonth (Day), Year at Time.
