# $nodeVersion[]
Returns the version of the specified node.

## Syntax
```
$nodeVersion[Node Number]
```

### Parameters
- `Node Number` `(Type: Integer || Flag: Required)`: The number of the node for which to return its version.

> You can use [`$botNode`](./botNode.md) to find out which node your bot is on.

## Example
```
$nomention
13 Node Version: $nodeVersion[13]
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example

- username: BDFD Support
  color: "#b9a0e0"
  bot: true
  content: |
    13 Node Version: 05-07-2023-c8800d6
```
