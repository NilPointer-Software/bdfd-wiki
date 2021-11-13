# $onlyNSFW
Only allows the command to be executed in [NSFW channels](https://support.discord.com/hc/en-us/articles/115000084051-NSFW-Channels-and-Content).

## Usage
```
$onlyNSFW[errorMessage]
```

### Breakdown
- `errorMessage` - The message that is returned when the command is executed outside of a NSFW channel.

## Example
```
$nomention
$onlyNSFW[❌ That command can only be used in NSFW channels.]
$c[Put your code here.]
```