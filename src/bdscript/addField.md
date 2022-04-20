# $addField
Adds a field to the embed.

## Usage
```php
$addField[name;value;(inline;embedIndex)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| name | The name of the field. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| value | The value of the field. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| inline | Whether the field should be inline. **\*** | [Bool](/src/resources/arguments/types.md#bool) | [Optional](/src/resources/arguments/flags.md#required)
| embedIndex |  The embed index, default is `1`. [(learn more)](/src/resources/embedIndexes.md) | [Integer](/src/resources/arguments/types.md#integer) | [Vacantable](/src/resources/arguments/flags.md#vacantable)

**\*** If 'yes' is set for `inline`, fields will appear in the same line. However, if you have more than 3 fields (or the fields are just too long) with inline enabled, the bot will return rows with 3 fields (2 if there is a thumbnail) in each row. 'no' by default.

> 📝 **Note:** Inline fields won't appear inline on mobile devices.

## Examples
### Example #1
*(without inline fields)*
```
$nomention
$addField[This is the field name! #1;This is the field value! #1]
$addField[This is the field name! #2;This is the field value! #2]
$addField[This is the field name! #3;This is the field value! #3]
```
![](https://user-images.githubusercontent.com/69215413/125877161-79acfd73-94a8-43c8-96dc-e6b74a7d5a01.png)

### Example #2
*(with inline fields)*
```
$nomention
$addField[This is the field name! #1;This is the field value! #1;yes]
$addField[This is the field name! #2;This is the field value! #2;yes]
$addField[This is the field name! #3;This is the field value! #3;yes]
```
![](https://user-images.githubusercontent.com/69215413/125877197-8ac0caff-fec4-487d-b342-e9aba781eb57.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*