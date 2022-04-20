# $stop
Stops code execution.

### Usage
```php
$stop
```

### Example
```
$nomention
$if[$username!=Spen]
  $title[Error]
  $description[That's only for Spen!]
  $stop $c[Stops all code from executing after this point. Since username is not equal to Spen then it'd be useless to run anymore code.]
$endif

$if[$username==Spen]
  Hello Spenpai!
$endif
```