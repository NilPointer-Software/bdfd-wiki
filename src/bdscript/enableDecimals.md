# $enableDecimals
Enables/disables decimals in math functions.

## Usage
```php
$enableDecimals[enabled]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| enabled | Whether to enable decimals in math functions. | [Bool](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

## Explanation
By default, decimals in math functions (e.g `$sum`, `$sub`, `$multi`, etc) are disabled. The only use for this function is to enable decimals if you want decimals enabled for math functions in that certain command.

**Enabling Decimals:**
```php
$enableDecimals[yes]
```
> 🧙‍♂️ [`$calculate[]`](./calculate.md) ignores `$enableDecimals`, since it uses it's [own system](./calculate.md#usage).