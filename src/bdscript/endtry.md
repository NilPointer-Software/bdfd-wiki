# $endtry
Closes the Error Handling block.

```admonish danger title="BDScript 2"
Can only be used in **[BDScript 2](../guides/general/bds2/aboutBDScript2.md)**.
```

## Syntax
```
$endtry
```

## Example
```
$nomention
$try
  $calculate[$message]
$endtry
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 5+2
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    7
```

~~~admonish example

- Without `$endtry`:
```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 5+2
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    <code>$try</code> not closed with <code>$endtry</code> or invalid use of <code>$sum</code>
```

~~~

```admonish question title="What is this?"
How [`$calculate[]`](./calculate.md), [`$message`](./message.md) and [`$try`](./try.md) works?
```

```admonish info title="Read more"
For more information, read the [Error Handling guide](../guides/general/bds2/errorHandling.md).
```
