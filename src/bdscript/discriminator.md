# $discriminator
Returns a user's discriminator (the 4 digit number at the end of their username).

```admonish fail
Discord has updated the username system, removing discriminators for users. Discriminators will only work for bots. For user it will return `0000`.
```

## Syntax
```
$discriminator[User ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Emptiable)`: The user to get the discriminator from.

## Example
```
$nomention
Discriminator: #$discriminator[$mentioned[1]]
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <@BDFD Support>
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Discriminator: #7678
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  highlight: true
  content: |
    !example <@RainbowKey>
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Discriminator: #0000
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  highlight: true
  content: |
    Returned 0000 because it only works for bot IDs.
```

```admonish note
You can use `$discriminator[]` to get the discriminator of the author.
```

```admonish question title="What is this?"
How [`$mentioned[]`](./mentioned.md) works?
```
