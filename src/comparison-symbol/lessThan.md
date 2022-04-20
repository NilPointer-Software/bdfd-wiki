# <
`<` is the **less than** comparison symbol.

## Usages
> Where 'x' is a value and 'y' is another value.

```php
$checkConditon[x<y]
```
Returns `true` when 'x' is less than 'y', else `false` is returned.

```php
$if[x<y]
	x is less than y.
$elseif[x==y]
  x is equal to y.
$else
	x is greater than y.
$endif
```
Returns `x is less than y.` when 'x' is less than 'y', else `x is greater than y.` is returned, unless the value is equal.


## Examples
```
$if[$isNumber[$message]]

$if[$message<0]
$sendMessage[Please provide a positive number.]
$stop
$endif
```