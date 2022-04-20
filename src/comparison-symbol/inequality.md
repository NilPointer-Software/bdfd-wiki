# !=
`!=` is the inequality comparison symbol. 

## Usages
Where 'x' is a value and 'y' is another value.

```php
$checkConditon[x!=y]
```
Returns `true` when 'x' is *not* equivalent to 'y', else `false` is returned.

```php
$if[x!=y]
	x is not equal to y.
$else
	x is equal to y.
$endif
```
Returns `x is not equal to y.` when 'x' is *not* equivalent to 'y', else `x is equal to y.` is returned.

## Examples
### Example #1
```php
$if[$isAdmin[$authorID]!=true]
	You are not admin!
$else
	You are admin!
$endif
```

### Example #2
```php
$if[$username!=noituri]
	Hello $username!
$else
	$sendMessage[Sup noit]
$endif
```

### Example #3
```php
$if[$or[$username!=noituri;$username!=kubastick;$username!=MineBartekSA]!=false] 
	You are not a Developer.
$else
	You are a developer.
$endif
```