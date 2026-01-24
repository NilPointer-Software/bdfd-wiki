# $membersCount
Returns the amount of members in the current guild.

## Syntax
```
$membersCount
```

## Example 
```
$nomention
This server has $membersCount members!
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    This server has 5281 members!
```

```admonish example

You can use `$membersCount` in the bot status to display how many users are in all servers of the bot.

![example](https://user-images.githubusercontent.com/70468667/219971617-d3cd270f-792a-415b-b9de-2651fc9d7f08.jpg)

```