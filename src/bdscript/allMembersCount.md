# $allMembersCount
Returns the total number of users from every server the bot is in.

```admonish failure
You can’t display the member count in the bot’s status with `$allMembersCount`. Use the [`$membersCount`](./membersCount.md) function instead!
```

## Syntax
```
$allMembersCount
```

## Example
```
$nomention
I'm serving $allMembersCount users!
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    I'm serving 20560 users!
```
