# $parentID[]
Returns the parent category ID for the given channel ID.

## Syntax
```
$parentID[Channel ID]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel from which to retrieve the category ID.

## Example
```
$nomention
Category: $parentID[$mentionedChannels[1]]
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <#bot-commands-1>
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Category: 612065938715574273
```

~~~admonish example
Returns empty if no parent (category) was found:

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <#developers>
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Category:
```

~~~