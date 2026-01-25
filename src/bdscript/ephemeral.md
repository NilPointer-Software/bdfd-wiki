# $ephemeral
Makes the bot's response ephemeral.

```admonish warning
Can only be used in [Slash Commands](../guides/general/interactions/slashCommands/aboutSlashCommands.md), [`$onInteraction`](../callbacks/onInteraction.md) and [`$onInteraction[]`](../callbacks/onInteractionComplex.md).
```

## Syntax
```
$ephemeral
```

## Example
```
$nomention
$ephemeral
Hello!
```

``` discord yaml
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  ephemeral: true
  command:
    user_id: 803569638084313098
    author: RainbowKey
    color: "#E67E22"
    command: /example
  content: |
    Hello!
```

~~~admonish example

- Without `$ephemeral`:

``` discord yaml
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  command:
    user_id: 803569638084313098
    author: RainbowKey
    color: "#E67E22"
    command: /example
  content: |
    Hello!
```

~~~