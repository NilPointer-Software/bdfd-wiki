# $aiDecideWithCtx
<div class="functionTags">
  <span id="PremiumTag">Premium</span>
</div>

Asks AI a yes/no question about the Discord message context and returns `true` or `false`.

## Syntax
```
$aiDecideWithCtx[Question]
```

```admonish tip title="AI Quota"
Each call to `$aiDecideWithCtx[]` consumes tokens from your daily quota. Use [`$aiQuota`](./aiQuota.md) to check how many tokens you have left.
```

### Parameters
- `Question` `(Type: String || Flag: Required)`: A yes/no question about the message context, for example: "Does this message contain profanity?".

### Returns
Returns `true` if the AI answers yes, or `false` if it answers no.

### Context provided to AI
The same Discord message context as [`$aiWithCtx[]`](./aiWithCtx.md) is automatically included, along with the full message content.

## Example
```
$nomention
$if[$aiDecideWithCtx[Does this message contain profanity?]==true]
  $deleteMessage
  Please keep it clean!
$endif
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example What the heck is going on?
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Please keep it clean!
```
\

```admonish tip
Use [`$aiDecide[]`](./aiDecide.md) if you want to provide the content to evaluate manually instead of using the message context.
```