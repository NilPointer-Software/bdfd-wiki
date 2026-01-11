# $isAdmin
Returns whether the provided user has the administrator permission or not.

```admonish info
`true` means the user has the administrator permission, `false` means they don't.
```

## Syntax
```
$isAdmin[User ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to check.

## Example
```
$nomention
Are you an admin?: `$isAdmin[$authorID]`
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
  content: |
    Are you an admin?: <code>true</code>
```

```admonish question title="What is this?"
How [`$authorID`](./authorID.md) works?
```