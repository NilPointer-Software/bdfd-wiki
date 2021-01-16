# If statements
Interprets commands conditionally.
Every **if statement** starts with `$if[condition]` and has to end with `$endif`.
`$else` is optional.

## Examples:

```
$if[$username==kubastick]
  Hi Kuba!
$else
  Hi $username!
$endif
```

```
$if[$getUserVar[money]>0]
  You're not broke
$endif
```

```
$if[$username==noituri]
  $if[$message[<]==nice]
    Noit said nice
  $endif
$endif
```