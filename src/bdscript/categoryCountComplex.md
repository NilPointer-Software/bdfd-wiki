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
There are $categoryCount[$message] categories in the server!
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
    There are 5 categories in the server!
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```
