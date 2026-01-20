# $useChannel
Redirects the bot's response message to a different channel.

<style>
.discord-messages {
    margin-top: 1.5rem;
}

.discord-messages > .discord-message:before {
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

.discord-messages > .discord-message:before {
    content: '#secret-channel';
}

.discord-messages:first-of-type > .discord-message:before {
    content: '#main-chat';
}

.discord-messages > .discord-message:hover:before {
    transform: scale(1.025);
    transform: rotate(-2.5deg);
    border-radius: 12.5px;
    transition: .3s;
}
</style>

```admonish warning
`$useChannel[]` **cannot** redirect the original slash command response.
```

## Syntax
```
$useChannel[Channel ID]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The ID of the channel to which the message will be redirected.

## Example
```
$nomention
$useChannel[$mentionedChannels[1]]
$description[Hello!]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <#secret-channel>
```

``` discord yaml
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  embed: 
    description: Hello!
```

```admonish question title="What is this?"
How [`$description[]`](./description.md) and [`$mentionedChannels[]`](./mentionedChannels.md) works?
```

```admonish tip
You also can use [`$sendMessage[]`](./sendMessage.md) with `$useChannel[]`.
```
