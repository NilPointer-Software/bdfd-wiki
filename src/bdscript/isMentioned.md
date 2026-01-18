# $isMentioned
Checks if the user is mentioned in the current message.

## Syntax
```
$isMentioned[User ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user ID to check.

## Example
```
$nomention
$isMentioned[$mentioned[1]]
```

``` discord yaml
- username: Kael
  user_id: 1059052363895287889
  color: "#E67E22"
  content: |
    Hai!
- username: Ivaylo
  user_id: 1251981607468798089
  color: "#E67E22"
  content: |
    !example Hello, <@Kael>!
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    true
```

```admonish question title="What is this?"
How [`$mentioned[]`](./mentioned.md) works?
```
