# $channelSendMessage
Sends a message in the provided channel.

<style>
.discord-messages {
    margin-top: 1.5rem;
}

.discord-messages > .discord-message:before {
    color: var(--color1);
    background: var(--color3);
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

## Syntax
```
$channelSendMessage[Channel ID;Message]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel to send the message in.
- `Message` `(Type: String || Flag: Required)`: The message that gets sent to the channel.

## Example
```
$nomention
$channelSendMessage[$mentionedChannels[1];Hello!]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <#secret-channel>
```

``` discord yaml
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hello!
```

```admonish question title="What is this?"
How [`$mentionedChannels[]`](./mentionedChannels.md) works?
```
