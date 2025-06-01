# $boostLevel
Returns the current guild's boost level.

## Syntax
```
$boostLevel
```

### Possible Outputs
Output (Boost Level) | Required Boosts |
---------------------|-----------------|
0                    | 0               |
1                    | 2               |
2                    | 7               |
3                    | 14              |

## Example
```
$nomention
Current Boost level: $boostLevel
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
    Current Boost level: 0
```
