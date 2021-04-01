# $userJoinedDiscord
Returns date when given user created their Discord account. You can also give your own date format.

## Usage
```$userJoinedDiscord[userID;(optional) format]```

## Example Command
```$userJoinedDiscord[$authorID]```

### Expected Output
```the-authors-discord-creation-date```

#### Expected Output Sample
```2020-03-05```

## Format
- The `format` allows you to customize the date format.

`Monday` = Day

`January` = Month

`3:04` = Time

`2006` = Year

`2` = Day Of The Month

### Format Example
`$userJoined[$authorID;January 2 (Monday), 2006 at 3:04]` would return Month DayOfTheMonth (Day), Year at Time.
