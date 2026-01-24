# $guildID[]
Finds a server ID using a server's name.

## Syntax
```
$guildID[Server name]
``` 

### Parameters
- `Server name` `(Type: String || Flag: Emptiable)`: The name of the server.

## Example 
```
$nomention
ID: $guildID[$message]
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example Bot Designer For Discord Official Server
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
      ID: 566363823137882154
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example B. Support
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
      ID: 1009018669982031912
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```
