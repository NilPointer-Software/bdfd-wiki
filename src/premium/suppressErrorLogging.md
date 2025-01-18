# $suppressErrorLogging
<div class="functionTags">
  <span id="PremiumTag">Premium</span>
</div>

Disable error logging for the command in bot logs.

## Syntax
```
$suppressErrorLogging
```

## Example
```
$nomention
Hello world!
$sum[5;10
$suppressErrorLogging
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    ❌ Command <code>$sum</code> is Invalid!
```

**In the [BDFD Web App](https://app.botdesignerdiscord.com):**\
- With `$suppressErrorLogging`:\
![example](https://github.com/user-attachments/assets/f8783361-38d7-4c9e-b4f4-3c6bf4249b34)\
- Without `$suppressErrorLogging`:\
![example](https://github.com/user-attachments/assets/245a7bc3-5efa-4d01-86d3-f57b46e93db2)

```admonish tip
You can use [`$suppressErrors`](../bdscript/suppressErrors.md) to disable error bot response.
```
