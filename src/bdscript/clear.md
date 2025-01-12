# $clear
Deletes a certain amount of messages.

> When using just `$clear`, the author's message must include a number.

## Syntax
```
$clear
```

> Discord doesn't allow deleting messages in bulk which are over 2 weeks old.

### Permissions
Required permissions that the bot must have for this function to work properly:
- `managemessages`

## Example
```
$nomention
$deletecommand
$clear
```

### Before
``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    5
- user_id: 729343563401265193
  username: Nicky
  color: "#509070"
  content: |
    4
- user_id: 154148273307910144
  username: MineBartekSA
  color: "#f1bdee"
  content: |
    3
- user_id: 437154602626973697
  username: Kito
  color: "#4365ab"
  content: |
    2
- user_id: 325663449680052227
  username: Emperor Toaster
  color: "#939394"
  content: |
    1
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 3
```
\
### After
``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    5
- user_id: 729343563401265193
  username: Nicky
  color: "#509070"
  content: |
    4
- user_id: 154148273307910144
  username: MineBartekSA
  color: "#f1bdee"
  content: |
    3
```

```admonish question title="What is this?"
How [`$deletecommand`](./deletecommand.md) works?
```
