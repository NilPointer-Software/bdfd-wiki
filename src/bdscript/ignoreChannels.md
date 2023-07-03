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
$ignoreChannels[1099033713687404614;❌ That command can't be used in this channel!]

Hello $username!
```

**Ignored channel**

![example1](https://user-images.githubusercontent.com/111157596/233706189-0d168572-a0e8-4c3d-803e-abf31826bb43.png)

**Whitelisted channel**

![example2](https://user-images.githubusercontent.com/111157596/233706206-0926d4bc-f0de-47b4-acb0-e7802772575b.png)
