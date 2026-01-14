# $colorRole
Changes the color of the mentioned role.

## Syntax
```
$colorRole[Color hex]
```

### Parameters
- `Color hex` `(Type: Color || Flag: Required)`: The [color hex](../tools/color.md) to change the mentioned role color to. You can also use color integer number.
```admonish tip title="Color Picker"
You can use our ["Color" tool](../tools/color.md) to select the best color!
```

## Example
```
$nomention
$colorRole[$noMentionMessage]
✅ Changed the role color of <@&$mentionedRoles[1]> to `$noMentionMessage`!
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
\
![example](https://user-images.githubusercontent.com/111157596/257056832-3040aa89-91ea-428e-b362-3ed075cf620e.png)

```admonish question title="What is this?"
How [`$noMentionMessage`](./noMentionMessage.md) and [`$mentionedRoles[]`](./mentionedRoles.md) works?
```

