# $isTicket
Checks whether the current or specified channel is a ticket or not.

<style>
.discord-messages {
    margin-top: 1.5rem;
}

.discord-messages > .discord-message:first-of-type:before {
    color: var(--link-color);
    background: var(--card-bg);
    border-radius: 10px;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: -1.8rem;
    margin-top: -.9rem;
    width: fit-content;
    transition: .3s;
    z-index: 1000;
}

.discord-messages > .discord-message:first-of-type:before {
    content: '#ticket-5267';
}

.discord-messages:first-of-type > .discord-message:first-of-type:before {
    content: '#main-chat';
}

.discord-messages:hover > .discord-message:before {
    transform: scale(1.025);
    transform: rotate(-2.5deg);
    border-radius: 12.5px;
    transition: .3s;
}
</style>

```admonish info
"true" means the channel is a ticket, "false" means it isn't.
```

## Syntax
```
$isTicket[(Channel ID)]
```

```admonish info
This function uses the channel name to determine whether it is a ticket or not. If the channel name contains `ticket` word, the function will return `true`.
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
