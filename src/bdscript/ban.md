# $ban
Bans the mentioned user.

## Syntax
```
$ban[(reason)]
```

## Parameters
- `reason`: The reason for this action, which will be save in the audit log. Can be left empty.
> The reason for the ban can be viewed using `$getBanResaon[]`.

## Example
### Without reason
```
$nomention
$ban
<@$mentioned[1]> was banned!
```
![example](https://user-images.githubusercontent.com/113303649/210043445-54315ca5-570c-4870-9512-13c2bcf40260.png)


### With reason
```
$nomention
$ban[$noMentionMessage]
<@$mentioned[1]> was banned!
```
![example](https://user-images.githubusercontent.com/113303649/210043547-4fc394e7-ecd4-4ef6-90b0-55dd7883c02f.png)
