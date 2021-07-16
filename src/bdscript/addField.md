# $addField
Adds a field to the embed.

## Usage
```
$addField[name;value;(optional) inline (yes/no)]
```

### Breakdown
- `name` - The name of the field.
- `value` - The value of the field.
- `inline` - If 'yes', fields will appear in same line. However, if you have more than 3 fields (or the fields are just too long) with inline enabled, the bot will return rows with 3 fields (2 if there is a thumbnail) in each row. 'no' by default. Optional.
> 🧙‍♂️ Inline fields may not appear inline on some mobile devices.

## Examples
### Example #1
*(without inline fields)*
```
$nomention
$addField[This is the field name! #1;This is the field value! #1]
$addField[This is the field name! #2;This is the field value! #2]
$addField[This is the field name! #3;This is the field value! #3]
```
![example1](https://user-images.githubusercontent.com/69215413/119729554-cb212c80-be42-11eb-937d-96954b500f1d.png)

### Example #2
*(with inline fields)*
```
$nomention
$addField[This is the field name! #1;This is the field value! #1;yes]
$addField[This is the field name! #2;This is the field value! #2;yes]
$addField[This is the field name! #3;This is the field value! #3;yes]
```
![example2](https://user-images.githubusercontent.com/69215413/119729758-07548d00-be43-11eb-8880-4281510fe354.png)
