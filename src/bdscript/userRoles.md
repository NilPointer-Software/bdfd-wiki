# $userRoles
Returns all role names given to the user.

## Syntax
```
$userRoles[User ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user for whom to return the role names.

## Example
```
$nomention
**My roles**:
$userRoles[$authorID]
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
  content: "<b>My roles</b>:\n 
    Support \n
    Wiki Contributor \n
    User"
```

```admonish question title="What is this?"
How [`$authorID`](./authorID.md) works?
```

```admonish tip
You can use [`$textSplit[]`](./textSplit.md) to specify a different separator.
```
