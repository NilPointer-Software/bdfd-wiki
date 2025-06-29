# $try
Opens the Error Handling block.

```admonish danger title="BDScript 2"
Can only be used in **[BDScript 2](../guides/general/bds2/aboutBDScript2.md)**.
```

## Syntax
```
$try
```

## Example
```
$nomention
$try
  $sum[5;$message]
$endtry
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example a
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 10
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    15
```

```admonish question title="What is this?"
How [`$sum[]`](./sum.md), [`$message`](./message.md) and [`$endtry`](./endtry.md) works?
```

```admonish info title="Read more"
For more information, read the [Error Handling guide](../guides/general/bds2/errorHandling.md).
```
