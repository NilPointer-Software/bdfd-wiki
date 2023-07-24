# $allowUserMentions
Enables user pings only for the provided user IDs, while the user not provided will be "fake pinged" *(the user will be pinged, but user will not be notified)*.

## Syntax
```
$allowUserMentions[User IDs;...]
```

### Parameters
- `User IDs` `(Type: Snowflake || Flag: Emptiable)`: The user(s) that can be pinged, leave empty to disable pings for every user. Separate user IDs using `;`.

## Example
```
$nomention
$allowUserMentions[]
Hi <@696368083517964288>! I mentioned you, but you didn't get pinged.
```
![example](https://user-images.githubusercontent.com/113303649/209945188-a195cda5-9297-46ff-b882-0363f5b4ed28.png)
