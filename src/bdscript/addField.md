# $addField
Adds a field to an embed.

## Syntax
```
$addField[Name;Value;(Inline?;Index)]
```

> 📌 You can add up to 25 fields per embed.

### Parameters
- `Name` `(Type: String || Flag: Required)`: The name of the field. It cannot exceed more than 256 characters.
- `Value` `(Type: String || Flag: Required)`: The value of the field. It cannot exceed more than 1024 characters.
- `Inline?` `(Type: Bool || Flag: Optional)`: If `yes`, fields will appear in the same line. However, if you have more than 3 fields (or the fields are just too long) with inline enabled, the bot will return rows with 3 fields (2 if there is a thumbnail) in each row. It is set to `no` by default.
- `Index` `(Type: Integer || Flag: Optional)`: Adds the field to a specified embed index number. [(learn more)](../resources/embedIndexes.md)

> 💡 Inline fields may not appear inline on some mobile devices.

## Examples

### Without inline fields
```
$nomention
$addField[The field name 1!;The field value 1!]
$addField[The field name 2!;The field value 2!]
$addField[The field name 3!;The field value 3!]
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
  content: " "
  embed:
    fields:
    - name: The field name 1!
      value: The field value 1!
    - name: The field name 2!
      value: The field value 2!
    - name: The field name 3!
      value: The field value 3!
```
\
### With inline fields
```
$nomention
$addField[The field name 1!;The field value 1!;yes]
$addField[The field name 2!;The field value 2!;yes]
$addField[The field name 3!;The field value 3!;yes]
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
  content: " "
  embed:
    fields:
    - name: The field name 1!
      value: The field value 1!
      inline: true
      inline_index: 1
    - name: The field name 2!
      value: The field value 2!
      inline: true
      inline_index: 2
    - name: The field name 3!
      value: The field value 3!
      inline: true
      inline_index: 3
```
