# Character Escaping
*(for advanced users)*

**What are Escape Characters?**

Escape characters are used to indicate that the character should not be interpreted as a modification of the code, rather just text that appears in the code or bot's response. Basically, escape characters let your bot return the function-triggering characters (e.g `;`, `$`, `[`, `]`) without any changes to the code.

## Escapable Characters
Character | Escaped
--------- | --------
; | `%{-SEMICOL-}%` or `\;`
$ | `%{DOL}%`
] | `%ESCAPED%` or `\]`
\ | `\\`

## Example
```
$nomention
$sendMessage[[ Hi, this is pretty cool\; right? \]]
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
    [ Hi, this is pretty cool; right? ]
```
