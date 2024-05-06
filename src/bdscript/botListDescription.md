# $botListDescription
Sets the description of this command, for the BDL command list (if the bot is on [**Bot Designer List**](https://botdesignerlist.com)).

## Syntax
```
$botListDescription[Text]
```

### Parameters
- `Text` `(Type: String || Flag: Required)`: The text that the description will be set to.

## Example
```
$nomention
Pong!
$botListDescription[Ping? Pong!]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Pong!
```
\
![example](https://user-images.githubusercontent.com/113303649/210341495-bbda340a-3f30-4c6d-af7c-4445233ede37.png)
