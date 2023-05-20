# $enableDecimals
Enables/disables decimals in math functions.

## Syntax
```
$enableDecimals[Enable]
```

### Parameters
- `Enable` `(Type: Bool || Flag: Required)`: Whether to enable decimals in math functions or not, `yes` means it's enabled and `no` means it's disabled.

## Explaination
By default, decimals in math functions (e.g `$sum`, `$sub`, `$multi`, etc) are disabled. The only use for this function is to enable decimals, if you want decimals enabled for math functions in that command.

Enabling decimals:
```
$enableDecimals[yes]
```
