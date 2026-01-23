# $isNSFW
Returns whether the provided channel is NSFW (Not Safe For Work) or not.

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
    content: 'Not NSFW channel';
}

.discord-messages:first-of-type > .discord-message:before {
    content: 'NSFW Channel';
}

.discord-messages > .discord-message:hover:before {
    transform: scale(1.025);
    transform: rotate(-2.5deg);
    border-radius: 12.5px;
    transition: .3s;
}
</style>

```admonish info
"true" means the channel is NSFW, "false" means it isn't.
```

## Syntax
```
$isNSFW[Channel ID]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel to check.

## Example
```
$nomention
Is this channel NSFW?: `$isNSFW[$channelID]`
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
    Is this channel NSFW?: <code>true</code>
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
    Is this channel NSFW?: <code>false</code>
```

```admonish question title="What is this?"
How [`$channelID`](./channelID.md) works?
```
