# Character Escaping
*(for advanced users)*

**What Are Escape Characters?**

Escape characters are used to indicate that the character should not be interpeted as a modifaction of the code, rather just text that appears in the code or bot's response. Basically, escape characters let your bot return the function-triggering characters (e.g `;`, `$`, `[`, `]`) without any changes to the code.

## Escapable Characters
Character | Escaped
--------- | --------
; | %{-SEMICOL-}%
$ | %{DOL}%
[ | \\[
] | %ESCAPED%


## Example
```
$sendMessage[\[ Hi, this is pretty cool%{-SEMICOL-}% right? %ESCAPED%]
```
![Screenshot 2021-06-21 11 50 33 AM](https://user-images.githubusercontent.com/69215413/122793121-d53f1b00-d288-11eb-9fab-8594c6059786.png)
