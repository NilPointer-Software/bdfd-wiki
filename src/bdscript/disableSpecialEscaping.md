# $disableSpecialEscaping
*(for advanced users)*

Disables escaping for `;` and `$` (e.g. `%{-SEMICOL-}%` gets interpeted as a regular `;`).

## Syntax
```
$disableSpecialEscaping
```

## Example
```
$nomention
$disableSpecialEscaping 
%{DOL}%replaceText[Hello World!%{-SEMICOL-}%World%{-SEMICOL-}%Planet%{-SEMICOL-}%1]
```

![example](https://user-images.githubusercontent.com/69215413/126878203-7dfe9494-b107-4e05-842c-2134b64138ef.png)
