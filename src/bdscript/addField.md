# $addField
Adds a field to an embed.

## Usage
```
$addField[name;value;(inline;index)]
```
> 📝 You can create up to a maximum of 25 fields per embed.

### Breakdown
- `name` - The name of the field. It cannot exceed more than 256 characters.
- `value` - The value of the field. It cannot exceed more than 1024 characters.
- `inline` - If 'yes', fields will appear in the same line. However, if you have more than 3 fields (or the fields are just too long) with inline enabled, the bot will return rows with 3 fields (2 if there is a thumbnail) in each row. It is set to 'no' by default. (Optional)
- `index` - Adds field to specified embed index number (Optional). Default is `1`. [(learn more)](../resources/embedIndexes.md)

> 📝 Inline fields may not appear inline on some mobile devices.

## Examples

#### Without inline fields
```
$nomention
$addField[This is the field name! #1;This is the field value! #1]
$addField[This is the field name! #2;This is the field value! #2]
$addField[This is the field name! #3;This is the field value! #3]
```
![example1](https://user-images.githubusercontent.com/69215413/125877161-79acfd73-94a8-43c8-96dc-e6b74a7d5a01.png)

#### With inline fields
```
$nomention
$addField[This is the field name! #1;This is the field value! #1;yes]
$addField[This is the field name! #2;This is the field value! #2;yes]
$addField[This is the field name! #3;This is the field value! #3;yes]
```
![example2](https://user-images.githubusercontent.com/69215413/125877197-8ac0caff-fec4-487d-b342-e9aba781eb57.png)
