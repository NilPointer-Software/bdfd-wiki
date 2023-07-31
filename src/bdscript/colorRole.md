# $colorRole
Changes the color of the mentioned role.

## Syntax
```
$colorRole[Color hex]
```

### Parameters
- `Color hex` `(Type: Color || Flag: Required)`: The [color hex](https://htmlcolorcodes.com/color-picker) to change the mentioned role color to.

## Example
```
$nomention
$onlyPerms[manageroles;❌ You need the `MANAGE_ROLES` permission to use that!]
$argsCheck[>2;Please provide the needed arguments! The `colorHex` and `role` arguments are needed.]
$colorRole[$noMentionMessage]
✅ Changed the role color of <@$mentionedRoles[1]> to `$noMentionMessage`!
```
``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  roles:
    cool role: "#E11F0E"
  content: |
    !example <@cool role> #E11F0E

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    ✅ Changed the role color of <@cool role> to <code>#E11F0E</code>!
```


![example](https://user-images.githubusercontent.com/111157596/257056832-3040aa89-91ea-428e-b362-3ed075cf620e.png)
