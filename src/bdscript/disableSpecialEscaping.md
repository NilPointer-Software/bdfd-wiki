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
      Hello Planet!
  ```
