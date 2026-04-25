# $aiDecide
<div class="functionTags">
  <span id="PremiumTag">Premium</span>
</div>

Asks AI a yes/no question about the provided content and returns `true` or `false`.

## Syntax
```
$aiDecide[Content;Question]
```

```admonish tip title="AI Quota"
Each call to `$aiDecide[]` consumes tokens from your daily quota. Use [`$aiQuota`](./aiQuota.md) to check how many tokens you have left.
```

### Parameters
- `Content` `(Type: String || Flag: Required)`: The content to evaluate, for example: a message or variable.
- `Question` `(Type: String || Flag: Required)`: A yes/no question about the content, for example: "Does this message contain profanity?".

### Returns
Returns `true` if the AI answers yes, or `false` if it answers no.

## Example
```
$nomention
$if[$aiDecide[$message;Is this message a question?]==true]
  That looks like a question!
$else
  That's not a question.
$endif
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example What time is it?
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    That looks like a question!
```
\

```admonish tip
Use [`$aiDecideWithCtx[]`](./aiDecideWithCtx.md) if you want AI to automatically receive the full Discord message context.
```