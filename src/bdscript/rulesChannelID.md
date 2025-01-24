# $rulesChannelID
Returns the servers rule channel's ID (**returns an error if there isn't such a channel*")

## Syntax
```
$rulesChannelID[(Guild ID)]
```

### Parameters
- `Guild ID` `(Type: Snowflake || Flag: Required)`: The guild to get the rule channel's ID.

## Example
```
$nomention
Rule channel's ID: $rulesChannelID[$guildID]
```

```discord yaml
- user_id: 1262009115689881702
  username: GettingBeatenByKito
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Rule channel's ID: 594598851155984426
```

~~~admonish tip title="How to stop the error message?"
The `$rulesChannelID` function as said in above returns an error if there isn't any rule channel set on the server and there is a way to stop that.
```
$nomention
$try 
  Rule channel's ID: $ruleChannelID[$guildID]
$catch
  No rule channel found!
$endtry
```

- Without try block:
```discord yaml
- user_id: 1262009115689881702
  username: GettingBeatenByKito
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    ❌ Function <code>$rulesChannelID</code> at <code>2:33</code> returned an error: No rule channel set in this server!
```

- With try block:
```discord yaml
- user_id: 1262009115689881702
  username: GettingBeatenByKito
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    No rule channel found!
```

> For more information, read the [Error Handling guide](../guides/general/bds2/errorHandling.md).

~~~
