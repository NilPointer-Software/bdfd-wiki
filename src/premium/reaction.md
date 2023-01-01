# $reaction
*(for premium users)*

Is a [callback](../callbacks/introduction.md). It gets triggered whenever an awaited reaction occurs.

## Syntax
```
$reaction[name]
```
## Parameters
- `name`: t is the value which is used in "command name" argument of `$awaitReactions[]`.

## Example
#### Trigger `$reaction[click]`
```
$nomention
$sendMessage[$username clicked on reaction]
```

![example](https://user-images.githubusercontent.com/113303649/210166708-3395a683-07ad-4f1b-b018-31f2a317de6f.png)

> For more info, see the [Awaited Reactions Guide](../premium/awaitedReactions.md).
