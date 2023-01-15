# $categoryChannels
List channel property under given category.

## Syntax
```
$categoryChannels[category ID;separator;(option)]
```
### Parameters
- `category ID` `(Type: Snowflake || Flag: Required)`: The category from which to take the channels. 
- `seperator` `(Type: String || Flag: Emptiable)`: The separator to use when separating channel properties.
- `option` `(Type: Enum || Flag: Optional)`: Which property to get from category channels. _(Default  is `name`)_

### Options
- `name`: The name of the channel.
- `id`: The id of the channel.
- `mention`: The channel mention.
- `count`: The amount of channels in the category.
> The `count` option does not list anything, instead it will return the number of channels under the given category.

## Example
```
$nomention
<#$categoryChannels[$categoryID[BDFD];>
<#;id]>
```
![example](https://user-images.githubusercontent.com/113303649/212550851-a3a87e0e-9393-4e38-9f87-921034ea69a7.png)
> [How `$categoryID[]` works?](./categoryID.md)
