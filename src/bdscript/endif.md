# $endif
Ends an if statement.

## Syntax
```
$endif
```

## Example
```
$nomention
$if[$message==BDFD]
  I love BDFD!
$endif
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example BDFD
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    I love BDFD!
```

~~~admonish example

- Without `$endif`:

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example BDFD
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    <code>$if</code> not closed with <code>$endif</code>
```

~~~

```admonish info title="Read more"
For more information, read the the [If Statements Guide](../guides/ifStatements.md).
```
