# Shorthand Syntax
You can 

> BDFD doesn't have any concept of truthiness or falsiness. If `$if[]`'s condition doesn't have `true` or `false`, a full comparison expression is expected.

## Usage
Where 'boolean' is `true` or `false`.
```
$if[boolean]
  $c[Code to execute]
$endif
```

### Use-Case
Let's say you have an if statement as such:
```
$if[$isAdmin[$authorID]==true]
  $c[Code to execute]
$endif
```

The code above can be shortened to:
```
$if[$isAdmin[$authorID]]
  $c[Code to execute]
$endif
```

Notice how in the `$if[]` statement, no comparsion symbol was used. This is possible because `$isAdmin[]` always returns `true` or `false`. If the user has admin, the code will execute, else it won't. `$if[$isAdmin[$authorID]]` is essientally the same as `$if[$isAdmin[$authorID]==true]`. But much shorter!