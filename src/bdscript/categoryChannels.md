# $categoryChannels
Lists all channels of the given category.

## Syntax
```
$categoryChannels[Category ID;Separator;(Option)]
```

### Parameters
- `Category ID` `(Type: Snowflake || Flag: Required)`: The category from which to list the channels. 
- `Seperator` `(Type: String || Flag: Emptiable)`: The separator to use when separating channel properties.
- `Option` `(Type: Enum || Flag: Optional)`: Which property to get from category channels. Default  is `name`. See [below](#options) for more information.

### Options
- `name` - The names of the channels.
- `id` - The IDs of the channels.
- `mention` - The mentions of the channels.
- `count` - The amount of channels in the category.

> The `count` option does not list anything, instead it will return the number of channels under the given category.

## Example
```
$nomention
<#$categoryChannels[$categoryID[BDFD];>
<#;id]>
```
``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !example

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    <#rules>
    <#news>
    <#update-logs>
    <#bots>
    <#bdfd-forums>
```

> [How `$categoryID[]` works?](./categoryID.md)
