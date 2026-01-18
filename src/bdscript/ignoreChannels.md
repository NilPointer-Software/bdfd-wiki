# $ignoreChannels
The command can't be executed in any of the provided channels. If the channel is ignored, then the provided "Error message" is returned.

<style>
.discord-messages {
    margin-top: 1.5rem;
}

.discord-messages > .discord-message:first-of-type:before {
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

.discord-messages > .discord-message:first-of-type:before {
    content: 'Another channel';
}

.discord-messages:first-of-type > .discord-message:first-of-type:before {
    content: 'Ignored channel';
}

.discord-messages:hover > .discord-message:before {
    transform: scale(1.025);
    transform: rotate(-2.5deg);
    border-radius: 12.5px;
    transition: .3s;
}
</style>

## Syntax
```
$ignoreChannels[Channel IDs;...;Error message]
```

### Parameters
- `Channel IDs` `(Type: Snowflake || Flag: Emptiable)`:  The channels to ignore. Use semicolons `;` as a separator to separate multiple channel IDs.
- `Error message` `(Type: String || Flag: Emptiable)`:  The message that is returned when the channel is ignored.

## Example
```
$nomention
$ignoreChannels[566370477967147018;❌ That command can't be used in this channel!]
Hello world!
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
      ❌ That command can't be used in this channel!
```
\

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
      Hello world!
```
