# $catch
Used to create a sub-block between `$try` and `$endtry` that will contain the code that will be executed when an error occurs.

```admonish danger title="BDScript 2"
Can only be used in **[BDScript 2](../guides/general/bds2/aboutBDScript2.md)**.
```

## Syntax
```
$catch
```

## Example
```
$nomention
$try
  $calculate[$message]
$catch
  ❌ Invalid expression!
$endtry
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example abc
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    ❌ Invalid expression!
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 60+9
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    69
```

```admonish question title="What is this?"
How [`$calculate[]`](./calculate.md), [`$message`](./message.md), [`$try`](./try.md) and [`$endtry`](./endtry.md) works?
```

```admonish info title="Read more"
For more information, read the [Error Handling guide](../guides/general/bds2/errorHandling.md).
```
