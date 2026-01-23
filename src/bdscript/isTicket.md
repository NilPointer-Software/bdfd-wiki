# $isTicket
Checks whether the current or specified channel is a ticket or not.

```admonish info
"true" means the channel is a ticket, "false" means it isn't.
```

## Syntax
```
$isTicket[(Channel ID)]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Optional)`: The channel to check. _(Defaults to the current channel)_

## Example
```
$nomention
$onlyIf[$isTicket[]==true;❌ This command can only be used in a ticket!]
This is a ticket!
```

```discord yaml
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
    ❌ This command can only be used in a ticket!
```

```discord yaml
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
    This is a ticket!
```

```admonish tip
To create a ticket, use the [`$newTicket[]`](./newTicket.md) function.
```
