# $ban
Bans the mentioned user. Both the bot and user running the command need the 'ban' permission.

## Usage
```
$ban[(optional) reason]
```

### Breakdown
- `reason` - The reason for this action, which will be sent to the audit-log. Optional.

## Examples
#### Example #1
*(without optional fields)*
```
$nomention
$ban
<@$mentioned[1]> was banned!
```
![image](https://user-images.githubusercontent.com/69215413/119858159-32da8480-bee2-11eb-922d-0fb05a5aa7c9.png)

#### Example #2
*(with optional fields)*
```
$nomention
$ban[$noMentionMessage]
<@$mentioned[1]> was banned!
```
![image](https://user-images.githubusercontent.com/69215413/119860514-661e1300-bee4-11eb-965e-e3c7fa78b5ca.png)
