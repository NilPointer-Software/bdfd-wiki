# $isBooster
Returns if user is boosting guild with nitro.

```admonish info
"true" means the user is a booster, "false" means it isn't.
```

## Syntax
```
$isBooster[(User ID;Guild ID)]
```

### Parameters

## Example
```
$nomention
Booster?: $isBooster[$mentioned[1]]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <@kubastick>
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Booster?: true
```

```admonish tip
You can use empty `$isBooster[]` to get the information about author.\
```

```admonish question title="What is this?"
How [`$mentioned[]`](./mentioned.md) works?
```
