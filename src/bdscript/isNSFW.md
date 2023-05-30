# $isNSFW
Returns whether the provided channel is NSFW (Not Safe For Work) or not.

> 🧙‍♂️ 'true' means the channel is NSFW, 'false' means it isn't.

## Syntax
```
$isNSFW[Channel ID]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel to check.

## Example
```
$nomention
Is <#$channelID> NSFW?: `$isNSFW[$channelID]`
```

![example](https://user-images.githubusercontent.com/69215413/123517430-dd270280-d66e-11eb-95cb-4edb5a9ed78c.png)
