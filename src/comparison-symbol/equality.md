# ==
`==` is the equality comparison symbol. 

## Usages
> Where 'x' is a value and 'y' is another value.

```php
$checkConditon[x==y]
```
Returns `true` when 'x' is equivalent to 'y', else `false` is returned.

```php
$if[x==y]
	x is equal to y.
$else
	x is not equal to y.
$endif
```
Returns `x is equal to y.` when 'x' is equivalent to 'y', else `x is not equal to y.` is returned.

## Examples
### Example #1
```php
$if[$isAdmin[$authorID]==true]
	You are admin!
$else
	You aren't admin!
$endif
```

### Example #2
```php
$if[$username==noituri]
	$sendMessage[Sup noit]
$else
	Hello $username!
$endif
```

### Example #3
```php
$if[$or[$username==noituri;$username==kubastick;$username==MineBartekSA]==true] 
	You are a Developer.
$endif
```