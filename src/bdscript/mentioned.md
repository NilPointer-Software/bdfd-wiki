# $mentioned
Returns the ID of the mentioned user.

## Syntax
```
$mentioned[Mention number;(Return author?)]
```

### Parameters 
- `Mention number` `(Type: HowMany || Flag: Required)`: The user-mention to get from the author's message (`1` = first user-mention, `2` = second, etc).
- `Return author?` `(Type: Bool || Flag: Optional)`: Whether to return the author's ID if no user is mentioned or not. Default is `yes`.

## Example
```
$nomention
$mentioned[1;no]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <@Master Bot>
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    User ID: 566613317972394004
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <@Menhera Bread>
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    User ID: 177535709731749890
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example text
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    User ID:
```

```admonish example
Using `$mentioned[1]` (which is the same as `$mentioned[1;yes]`) will return **your** ID instead of an empty value.
```
