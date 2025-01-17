# $afkChannelID
Returns the servers AFK channel ID (**returns an error if there isn't such a channel**).

```admonish info title="What is this?"
An AFK channel on Discord is a voice channel where inactive users are automatically moved after being idle for a set time. It keeps active channels clear of idle users.
```

## Syntax
```
$afkChannelID
```

## Example
```
$nomention
AFK channel ID: $afkChannelID
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
    AFK channel ID: 567428769766440962
```

~~~admonish tip title="How to stop the error message?"
The `$afkChannelID` function as said in above returns an error if there isn't any AFK channel set on the server and there is a way to stop that.
```
$nomention
$try 
  AFK channel ID: $afkChannelID
$catch
  No AFK channel found!
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
    ❌ Function <code>$afkChannelID</code> at <code>3:31</code> returned an error: No AFK channel set in this server!
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
    No AFK channel found!
```

> How [`$try`](./try.md), [`$catch`](./catch.md) and [`$endtry`](./endtry.md) works?

~~~
