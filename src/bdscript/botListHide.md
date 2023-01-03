# $botListHide
Hides this command from being shown on the BDL command list (if the bot is on [**Bot Designer List**](https://botdesignerlist.com)).

## Syntax
```
$botListHide
```

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

![example](https://user-images.githubusercontent.com/113303649/210347402-7b36f8f4-fc8f-4804-9310-1ed2de0392dc.png)
### With $botListHide
![example](https://user-images.githubusercontent.com/113303649/210349185-677b00f3-df10-4443-a9b5-25ec9c2c2e29.png)
### Without $botListHide
![example](https://user-images.githubusercontent.com/113303649/210350126-b99c73bd-e684-4f5e-a01c-f32c40c54c20.png)

