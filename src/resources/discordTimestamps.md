# Discord Timestamps
Discord timestamps are used to provide time in multiple formats. The information is given according to the user's timezone and locale. Discord timestamps are built with the Unix Time system, meaning that they are dynamic. These can be used by anyone; This includes users, webhooks, and applications.
## Styling

Timestamp syntax: `<t:unixTime:Style>`

| Style | Input | Output | Description |
| :---: | :---: | :---: | :---: |
| t | <t:1667219160:t> | 12:26 AM  | Short Time |
| T | <t:1667219160:T> | 12:26:00 AM | Long Time |
| d | <t:1667219160:d> | 10/31/2022 | Short Date |
| D | <t:1667219160:D> | October 31, 2022 | Long Date |
| f | <t:1667219160:f> | October 31, 2022 12:26 AM  | Short Date/Time |
| F | <t:1667219160:F> | Monday, October 31, 2022 12:26 AM | Long Date/Time |
| R | <t:1667219160:R> | 27 minutes ago | Relative Time |

> The default style is `f`, if no style provided.

## BDFD usability
Functions which return UNIX timestamp:
- [`$getTimestamp`](../bdscript/getTimestamp.md)
- [`$hostingExpireTime`](../bdscript/hostingExpireTime.md)
- [`$premiumExpireTime`](../bdscript/premiumExpireTime.md)

### Example

#### Code:
```
$nomention
<t:$getTimestamp:D>
```
#### Output:
![image](https://user-images.githubusercontent.com/113247745/199022364-84ebdc91-4259-4f1f-9299-832784349db4.png)
