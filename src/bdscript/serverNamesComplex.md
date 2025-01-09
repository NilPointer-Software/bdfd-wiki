# $serverNames[]
Returns *x* (`Amoount`) server names in which the bot is in.

## Syntax
```
$serverNames[Amount;Separator]
```

### Parameters
- `Amount` `(Type: Integer || Flag: Required)`: The amount of server names you want. Use `-1` if you want to return all server names.
- `Separator` `(Type: String || Flag: Emptiable)`: A custom separator for separating the server names.

## Example
```
$nomention
$serverNames[3;
]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: "Bot Designer for Discord Official Server\n
    B. Support\n
    Bot Designer List"
```
