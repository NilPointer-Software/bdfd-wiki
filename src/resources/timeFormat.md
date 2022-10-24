# Time Format
Custom time formatting values for [`$userJoinedDiscord`](./bdscript/userJoinedDiscord.md) and [`$userJoined`](./bdscript/userJoined.md) functions.

### Time Formats
List of supported time format values :

Value                   | Return Information
--------------- | ----------------------------------------
2006                   |  Year 
06                        |  Year (Short)
__2                      |  Day count of the year (Space-Padded)
002                     |  Day count of the year (Zero-Padded)
Jan                      |  Month (Short)
January              |  Month
01                        |  Numerical Month (Full)
1                          |  Numerical Month
Mon                    |  Week Day (Short)
Monday              |  Week Day
02                        |  Day (Full)
2                          |  Day
_2                        |  Day count of the month (Space-Padded)
PM                      |   AM/PM (Uppercase)
pm                      |   AM/PM (Lowercase)
05                       |   Second
5                          |  Second (Short)
15                        |  24-Hour
3                          |  12-Hour (Short)
03                       |   12-Hour
4                          |  Minute (Short)
04                       |   Minute
MST                    |   Timezone name
-0700[^1]          |   Timezone offset (±hhmm)
-07:00[^1]         |   Timezone offset (±hh:mm)
-07[^1]               |   Timezone offset (±hh)
-070000[^1]      |  Timezone offset (±hhmmss)
-07:00:00[^1]    |  Timezone offset (±hh:mm:ss)

> 📌 All time format values are case-sensitive.

[^1]: Replacing the sign in the format with a Z triggers the ISO 8601 behavior of printing Z instead of an offset for the UTC zone.
