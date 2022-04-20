# Explication Prefix
The character `'` is the "Explication Prefix", when it is used a literal random value is returned. The usage of the Explication Prefix is `$'<supported function name>`.\
In simple terms, if `$random[0;5]` returns `2` in the code first, then `2` is returned  every other time you use `$random[0;5]` in the code. But let's say you want `$random[0;5]` to be random every time it's used in the command, then you'd use the Explication Symbol. 
> ⚠️ **Warning:**  BDScript Unstable is needed for the Explication Prefix to work. However, [`$optOff[]`](/src/bdscript/optOff.md), which is a BDScript 2 feature does something very similar.

```php
$c[These would return the same numbers for both $random.]
$random[1;100]
$random[1;100]

$c[These would return different numbers for both $random.]
$'random[1;100]
$'random[1;100]
```

### Supported Functions
The Explication Prefix feature is only supported for the following functions:
- `$'random[]` and `$'random`
- `$'randomText[]`
- `$'randomUser`
- `$'randomMention`
- `$'randomUserID`
- `$'randomString[]`
- `$'randomChannelID`