# $ephemeral
Makes the bot's response ephemeral.
When The bot's response is ephemeral, only who used the command can see the bot response.

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
    ![Ephemeral](https://cdn.discordapp.com/attachments/1415600868077863022/1421210711052521532/26.09.2025_21.03.25_REC.png)

```

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
    ![Not Ephemeral](https://cdn.discordapp.com/attachments/1415600868077863022/1421211021388812328/26.09.2025_21.04.22_REC.png)
```

