# $allowRoleMentions
Enables role pings only for the provided role IDs, while the roles not provided will be 'fake pinged' *(the role will be pinged, but users will not be notified)*.

## Syntax
```
$allowRoleMentions[role IDs;...]
```

## Parameters
- `role IDs` `(Type : Snowflake || Flag : Emptiable)` : The roles that can be pinged, leave empty to disable pings for every role. Separate role IDs using `;`.

## Example
```
$nomention
$allowRoleMentions[]
I'm pinging <@&858376972303204362>, but no one got notified; wow!
```

![example](https://user-images.githubusercontent.com/113303649/209944631-72e05d4a-6f0f-4dce-aba0-db9f51a46205.png)