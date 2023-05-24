# $reaction
*(for premium users)*

This is a [callback](../callbacks/introduction.md). It gets triggered whenever an awaited reaction occurs.

## Syntax
```
$reaction[Name]
```

### Parameters

| Argument | Description                                                                   | Type   | Flag     |
|----------|-------------------------------------------------------------------------------|--------|----------|
| Name     | It's the value which is used in the "command name" argument of `$awaitReactions[]`. | String | Required |

## Example
### Trigger `$reaction[click]`
```
$nomention
$sendMessage[$username clicked on reaction]
```

![example](https://user-images.githubusercontent.com/113303649/210166708-3395a683-07ad-4f1b-b018-31f2a317de6f.png)

> For more info, see the [Awaited Reactions Guide](../premium/awaitedReactions.md).
