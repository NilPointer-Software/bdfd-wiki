# $disableInnerSpaceRemoval
Disables the removal of multiple spaces from within the message.

## Syntax
```
$disableInnerSpaceRemoval
```

## Example
```
$nomention
$disableInnerSpaceRemoval
Hello               $displayName!
```

``` discord yaml
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
      Hello RainbowKey!
```

~~~admonish example

- Without `$disableInnerSpaceRemoval`:

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
      HelloㅤㅤㅤㅤRainbowKey!
```

~~~

```admonish question title="What is this?"
How [`$displayName`](./displayName.md) works?
```
