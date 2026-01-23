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

```admonish note
The `count` option does not list anything, instead it will return the number of channels under the given category.
```

## Example
```
$nomention
Total $categoryChannels[$parentID;;count] channels!
$categoryChannels[$parentID;
;mention]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Total 5 channels!
    <#rules>
    <#example>
    <#update-logs>
    <#main-chat>
    <#secret-channel>
```

```admonish question title="What is this?"
How [`$parentID`](./parentID.md) works?
```
