# $randomCategoryID
Returns a random category ID from the current server or from the provided server.

## Syntax
```
$randomCategoryID[(Guild ID)]
```

### Parameters
- `Guild ID` `(Type: Snowflake || Flag: Optional)`: The server from which to get a random category ID. _(Defaults to the current server)_

## Example
```
$nomention
Random Category: $channelName[$randomCategoryID[]]
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
    Random Category: BDFD
```

```admonish question title="What is this?"
How [`$channelName`](./channelName.md) works?
```
