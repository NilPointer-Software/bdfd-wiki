# $systemChannelID
Returns the server's system channel ID (**returns an error if there isn’t such a channel**).

## Syntax
```
$systemChannelID 
```

## Example
```
$nomention
System channel ID: $systemChannelID
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
    System channel ID: 566364581522440232
```

~~~admonish tip title="How to stop the error message?"
The `$systemChannelID` function as said in above returns an error if there isn't any AFK channel set on the server and there is a way to stop that.
```

```
$nomention
$try 
  System channel ID: $systemChannelID
$catch
  No system channel found!
$endtry
```
~~~

Without try block

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
    ❌ Function <code>$systemChannelID</code> at <code>2:35</code> returned an error: No system channel set in this server!
```

With try block
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
    No system channel found!
```

```admonish question title="What is this?"
How [`$try`](./try.md), [`$catch`](./catch.md) and [`$endtry`](./endtry.md) works?