# $enableDecimals
Enables/disables decimals in math functions.

## Syntax
```
$enableDecimals[Enable]
```

### Parameters
- `Enable` `(Type: Bool || Flag: Required)`: Whether to enable decimals in math functions or not, `yes` means it's enabled and `no` means it's disabled.

### Explaination
By default, decimals in math functions (e.g `$sum`, `$sub`, `$multi`, etc) are disabled. The only use for this function is to enable decimals, if you want decimals enabled for math functions in that command.

## Example
```
$nomention
$enableDecimals[yes]
Result: $random[1;5]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Result: 3.381
```

> [How `$random[]` works?](./randomComplex.md)
