# $findRole
Finds a role's ID using the given role name, ID, or mention.

> This function can only find roles of **the current** server.

## Syntax
```
$findRole[Role]
```

### Parameters
- `Role` `(Type: String || Flag: Emptiable)`: The role name, ID, or mention to find.

## Example
```
$nomention
Role ID: $findRole[$message]
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example Support
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Role ID: 568155071997542410
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```
