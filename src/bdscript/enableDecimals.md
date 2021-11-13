# $enableDecimals
Enables/disables decimals in math functions.

## Usage
```
$enableDecimals[enable (yes/no)]
```

### Breakdown
- `enable` - Whether to enable decimals in math functions or not.

## Explaination
By default, decimals in math functions (e.g `$sum`, `$sub`, `$multi`, etc) are disabled. The only use for this function is to enable decimals, if you want decimals enabled for math functions in that command.

**Enabling Decimals:**
```
$enableDecimals[yes]
```
> 🧙‍♂️ `$calculate` ignores `$enableDecimals`.