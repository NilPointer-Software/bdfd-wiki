# $channelType
Returns the type of a channel. 

## Syntax
```
$channelType[Channel ID]
```

> The different channel types that the bot will return are: `text`, `voice`, `category`, `thread`, `dm`, `stage`, `announcement` and `forum`.

### Parameters 
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel which type will be returned.


## Example
```
$nomention
$channelType[$channelID]
```

**Text Channel**

``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !channelType

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    text
```

\
**DM Channel**

``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  content: |
    !channelType

- user_id: 566613317972394004
  username: Wiki Bot
  bot: true
  verified: true
  content: |
    dm
```
