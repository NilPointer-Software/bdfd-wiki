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
![example](https://user-images.githubusercontent.com/113303649/212550851-a3a87e0e-9393-4e38-9f87-921034ea69a7.png)

> [How `$categoryID[]` works?](./categoryID.md)
