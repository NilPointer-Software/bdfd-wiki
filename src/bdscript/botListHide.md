# $botListHide
Hides this command from being shown on the BDL command list (if the bot is on [**Bot Designer List**](https://botdesignerlist.com)).

## Syntax
```
$botListHide
```
> This function does not hide the command for [`$botCommands[]`](./botCommands.md).

## Example
1. Create two commands and set the trigger `!ping` for one command and `!secret` for the other.
2. Add the `$botListHide` function to the command code with the `!secret` trigger.

   Code with trigger `!secret`:
   ```
   $nomention
   This is a secret command! 🤫
   $botListHide
   ```

   Code with trigger `!ping`:
   ```
   $nomention
   Pong!
   $botListDescription[Ping? Pong!]
   ```
3. Execute commands

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !secret
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#ffffff"
  bot: true
  verified: true
  content: |
    This is a secret command! 🤫
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !ping
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#ffffff"
  bot: true
  verified: true
  content: |
    Pong!
```

### With `$botListHide`
 ![example](https://user-images.githubusercontent.com/113303649/210349185-677b00f3-df10-4443-a9b5-25ec9c2c2e29.png)

### Without `$botListHide`
![example](https://user-images.githubusercontent.com/113303649/210350126-b99c73bd-e684-4f5e-a01c-f32c40c54c20.png)
