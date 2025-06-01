# $eval
<div class="functionTags">
  <span id="DangerousTag">Dangerous</span>
</div>

Evaluates the provided BDScript code.

```admonish danger title="BDScript 2"
Can only be used in **[BDScript 2](../guides/general/bds2/aboutBDScript2.md)**.
```

> ⚠️ **Should be used with caution!** ⚠️


## Syntax
```
$eval[Source code]
```

### Parameters 
- `Source code` `(Type: String || Flag: Emptiable)`: The code to be evaluated.

## Example
```
$nomention
$eval[$message]
```

``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !example $sendMessage[Hello! My username is $username]
- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Hello! My username is Nicky
```

> How [`$message`](./message.md) works?

> ⚠️ **Should be used with caution!** ⚠️
> 
> It is recommended to restrict the command to be only used by the bot developers, this can be done with:
```
$nomention
$onlyForIDs[$botOwnerID;❌ You are not my owner!]
$eval[$message]
```

> How [`$onlyForIDs[]`](./onlyForIDs.md) and [`$botOwnerID`](./botOwnerID.md) works?
