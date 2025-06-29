# $deleteRole
Deletes a role.

## Syntax
```
$deleteRole[Role ID]
```

### Parameters
- `Role ID` `(Type: Snowflake || Flag: Required)`: The role to delete.

### Permissions
Required permissions that the bot must have for this function to work properly:
- `manageroles`

## Example
```
$nomention
$deleteRole[$findRole[$message]]
Successfully deleted $roleName[$findRole[$message]]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example Cool Role
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
      Successfully deleted Cool Role
  ```
\
![example](https://user-images.githubusercontent.com/111157596/239688761-3bd88f60-8a5c-48e9-9b23-677b2e4ecd17.png)

> How [`$findRole[]`](./findRole.md), [`$roleName[]`](./roleName.md) and [`$message`](./message.md) works?
