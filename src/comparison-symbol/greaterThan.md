# >
`>` is the greater than comparison symbol.

## Usages
> Where 'x' is a value and 'y' is another value.

```php
$checkConditon[x>y]
```
Returns `true` when 'x' is greater than 'y', else `false` is returned.

```php
$if[x>y]
	x is greater than y.
$else
	x is less than y.
$endif
```
Returns `x is greater than y.` when 'x' is greater than 'y', else `x is less than y.` is returned.


## Examples
```
$if[$isNumber[$message]]

$if[$message<0]
$sendMessage[Please provide a positive number.]
$stop
$endif