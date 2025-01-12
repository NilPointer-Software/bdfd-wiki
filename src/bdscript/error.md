# $error
Used in the `$catch` block to return the BDScript 2 error information.

```admonish danger title="BDScript 2"
Can only be used in **[BDScript 2](../guides/general/bds2/aboutBDScript2.md)**.
```

## Syntax
```
$error[Type]
```

## Parameters
- `Type` `(Type: Enum || Flag: Required)`: What type of error data to return.

### Error Type
| Name      | Description                                                            | Example
| --------- | ---------------------------------------------------------------------- | ----------------------------------------
| `command` | Returns the name of the function that returned the error.              | $sum
| `message` | Returns the error message that was received.                           | expected integer in position 2, got 'a'
| `source`  | Returns the content of the line where the error occurred.              | $sum[2;a]
| `row`     | Returns the number of the row in the code where the error occurred.    | 2
| `column`  | Returns the number of the column in the code where the error occurred. | 10

~~~admonish warning title="Syntax sensitivity"
The type input must only be written in lowercase letters.\
❌ Not correct:
```
$error[MEsSage]
```
✅ Correct:
```
$error[message]
```
~~~

## Example
```
$nomention
$try
  $description[Hello developer!;]
$catch
❌ An error has occurred!
Function: $error[command]
Error: $error[message]
$endtry
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    ❌ An error has occurred!
    Function: $description
    Error: expected valid value in position 2, got empty value
```

```admonish question title="What is this?"
How [`$description[]`](./description.md), [`$try`](./try.md), [`$endtry`](./endtry.md) and [`$catch`](./catch.md) works?
```

```admonish info title="Read more"
For more information, read the [Error Handling guide](../guides/general/bds2/errorHandling.md).
```
