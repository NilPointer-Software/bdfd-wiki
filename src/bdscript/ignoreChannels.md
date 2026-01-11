# $ignoreChannels
The command can't be executed in any of the provided channels. If the channel is ignored, then the provided "Error message" is returned.

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
