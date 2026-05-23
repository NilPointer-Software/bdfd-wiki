# $varExistError
Returns a custom error if a certain variable doesn't exist in the app.

## Syntax
```
$varExistError[Name;Error message]
```

### Parameters
- `Name` `(Type: String || Flag: Required)`: The variable that should exist.
- `Error message` `(Type: String || Flag: Emptiable)`: The custom error message to return if the variable doesn't exist.

## Example
```
$nomention
$varExistError[Cool;Add the 'Cool' variable in the app.]
You are now cool!
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
    Add the 'Cool' variable in the app.
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
    You are now cool!
```

```admonish info title="Read more"
For more information, read the [Variables Guide](../guides/introduction/variables.md).
```
