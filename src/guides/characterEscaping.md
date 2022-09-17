# Character Escaping
*(for advanced users)*

**What are Escape Characters?**

Escape characters are used to indicate that the character should not be interpreted as a modification of the code, rather just text that appears in the code or bot's response. Basically, escape characters let your bot return the function-triggering characters (e.g `;`, `$`, `[`, `]`) without any changes to the code.

## Escapable Characters
Character | Escaped
--------- | --------
; | `%{-SEMICOL-}%` or `\;`
$ | `%{DOL}%`
[ | `\[`
] | `%ESCAPED%` or `\]`
\ | `\\`

## Example
```
$sendMessage[[ Hi, this is pretty cool\; right? \]]
```
![example](https://user-images.githubusercontent.com/69215413/122793121-d53f1b00-d288-11eb-9fab-8594c6059786.png)
