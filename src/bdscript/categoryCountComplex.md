# $categoryCount[]
Returns the category count of the provided guild.

## Syntax
```
$categoryCount[Guild ID]
```

### Parameters
- `Guild ID` `(Type: Snowflake || Flag: Required)`: The guild to get its category count.

## Example
```
$nomention
There are $categoryCount[$message[1]] categories in the server!
```
``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !categories 790676954247725106

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    There are 5 categories in the server!
```
