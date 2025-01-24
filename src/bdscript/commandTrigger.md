# $commandTrigger
Returns the current command trigger.

```admonish info
Returns empty value in the callbacks!
```

## Syntax
```
$commandTrigger
```

## Example
```
$nomention
Commmand trigger: $commandTrigger
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example Hello world!
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Commmand trigger: !example
```
