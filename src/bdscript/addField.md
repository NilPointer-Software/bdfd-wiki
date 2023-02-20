# $addField
Adds a field to an embed.

## Syntax
```
$addField[name;value;(inline?;index)]
```
> You can create up to 25 fields per embed.

### Parameters
- `name` `(Type: String || Flag: Required)`: The name of the field. It cannot exceed more than 256 characters.
- `value` `(Type: String || Flag: Required)`: The value of the field. It cannot exceed more than 1024 characters.
- `inline?` `(Type: Bool || Flag: Optional)`: If `yes`, fields will appear in the same line. However, if you have more than 3 fields (or the fields are just too long) with inline enabled, the bot will return rows with 3 fields (2 if there is a thumbnail) in each row. It is set to `no` by default.
- `index` `(Type: Integer || Flag: Optional)`: Adds field to specified embed index number. [(learn more)](../resources/embedIndexes.md)

> Inline fields may not appear inline on some mobile devices.

## Examples

### Without inline fields
```
$nomention
$addField[This is the field name! #1;This is the field value! #1]
$addField[This is the field name! #2;This is the field value! #2]
$addField[This is the field name! #3;This is the field value! #3]
```
![example](https://user-images.githubusercontent.com/113303649/209849131-47574fa5-ba65-4552-b30e-c71f7af980a9.png)

### With inline fields
```
$nomention
$addField[This is the field name! #1;This is the field value! #1;yes]
$addField[This is the field name! #2;This is the field value! #2;yes]
$addField[This is the field name! #3;This is the field value! #3;yes]
```
![example](https://user-images.githubusercontent.com/113303649/209849351-0fb6875c-2bfa-4f14-9e01-84e6d31b0bee.png)
