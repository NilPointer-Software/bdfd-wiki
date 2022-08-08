# $scriptLanguage
Returns the name of scripting language used by the command.

### Output value
- BDScript
- BDScript 2
- BDScript Unstable

> 📝 This function is useful for letting users know which script language should the command be used in.

## Example
```
$nomention
$if[$scriptLanguage!=BDScript 2]
You need to use BDScript 2 in this command.
$else
You used BDScript 2!
$endif
```
